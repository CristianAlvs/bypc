import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";

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

  const [invalidFields, setInvalidFields] = useState([]);

  const navigate = useNavigate();

  function validateFields() {
    const invalids = [];

    if (!title) {
      invalids.push("title");
    }
    if (!value) {
      invalids.push("value");
    }
    if (!form_of_payment) {
      invalids.push("form_of_payment");
    }
    if (!link) {
      invalids.push("link");
    }
    if (!status) {
      invalids.push("status");
    }

    setInvalidFields(invalids);
    
    return invalids.length === 0;
  }

  async function handleNewCard() {
    if (!validateFields()) {
      return alert("Preencha os campos obrigatórios!");
    }
    
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
  
    await api.post("/cards", formData, {
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
            className={invalidFields.includes("title") ? "invalid" : ""}
            onChange={e => setTitle(e.target.value)}
          />

          <Input 
            label={"Descrição"} inputType={"textarea"} placeholder="Escreva os pontos mais importantes do produto" 
            onChange={e => setDescription(e.target.value)}
          />

          <Input 
            label={"Valor *"} inputType={"currency"} placeholder="R$ 00,00" 
            className={invalidFields.includes("value") ? "invalid" : ""}
            onChange={e => setValue(e.target.value)}
          />

          <Input 
            label={"Forma de Pagamento *"} placeholder="Digite" 
            className={invalidFields.includes("form_of_payment") ? "invalid" : ""}
            onChange={e => setFormOfPayment(e.target.value)}
          />

          <Input 
            label={"Link do Produto *"} placeholder="Cole o link deste produto" 
            className={invalidFields.includes("link") ? "invalid" : ""}
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
            className={invalidFields.includes("status") ? "invalid" : ""}
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
