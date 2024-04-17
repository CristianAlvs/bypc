import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../Input';
import { Button }from "../Button";
import { Logo } from '../Header/styles';
import { InputImage } from '../InputImage';

import clipboard from '../../assets/clipboard.svg';
import iconDelete from '../../assets/iconDelete.svg';
import imgDefault from '../../assets/imgDefault.svg';

import { api } from '../../services/api';

import { Container, Header, Main, Footer, Column } from './styles';

export function NewCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [form_of_payment, setFormOfPayment] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("");

  const [image, setImage] = useState(imgDefault);
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

  async function handleNewCard() {
    const cleanValue = value.replace("R$ ", "").replaceAll(".", "");
    const cleanValueWithDot = cleanValue.replace(",", ".");
    const parsedValue = parseFloat(cleanValueWithDot);
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("value", parsedValue);
    formData.append("form_of_payment", form_of_payment);
    formData.append("image", imageFile);
    formData.append("tag", status.toUpperCase());
    formData.append("link", link);
  
    await api.post("/cards/1", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    navigate("/");
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  return (
    <Container>
      <Header>
        <Logo>
            <img src={clipboard} alt="clipboard" />
            <p>Meu Card</p>
        </Logo>

        <Link to="/">
          <img src={iconDelete}  alt="delete" />
        </Link>
      </Header>
      <Main>
        <Column>
          <Input 
            label={"Título *"} placeholder="Escreva o título do Card" 
            onChange={e => setTitle(e.target.value)}
          />

          <Input 
            label={"Descrição"} inputType={"textarea"} placeholder="Escreva os pontos mais importantes do produto" 
            onChange={e => setDescription(e.target.value)}
          />

          <Input 
            label={"Valor *"} inputType={"currency"} placeholder="R$ 00,00" 
            onChange={e => setValue(e.target.value)}
          />

          <Input 
            label={"Forma de Pagamento *"} placeholder="Digite" 
            onChange={e => setFormOfPayment(e.target.value)}
          />

          <Input 
            label={"Link do Produto *"} placeholder="Cole o link deste produto" 
            onChange={e => setLink(e.target.value)}
          />
        </Column>
        <Column>
          <InputImage 
            label={"Imagem"} img={image}
            onChange={handleChangeImage}
          />

          <Input 
            label={"Status *"} inputType={"select"} placeholder="Selecione"
            onChange={e => setStatus(e.target.value)}
          >
            <option hidden>Selecione</option>
            <option value="analisar">Analisar</option>
            <option value="aprovado">Aprovado</option>
          </Input>
        </Column>
      </Main>
      <Footer>
        <Button title={"Salvar"} padding="8px 50px" fontSize="14px" onClick={handleNewCard}></Button>
      </Footer>
    </Container>
  )
}