import { useState, useEffect } from 'react';
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

export function EditCard({ id }) {
  const [data, setData] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [form_of_payment, setFormOfPayment] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("");

  const [image, setImage] = useState(imgDefault);
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCard() {
      const response = await api.get(`/cards/${id}`);
      const { title, description, value, form_of_payment, link, tag, image } = response.data;
      const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

      setTitle(title);
      setDescription(description);
      setValue(formattedValue);
      setFormOfPayment(form_of_payment);
      setLink(link.url);
      setStatus(tag.name);
      
      loadImage(`${api.defaults.baseURL}/files/${image}`);

      setData(response.data);
    }

    fetchCard();
  }, [id]);

  async function loadImage(imageUrl) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    setImageFile(blob);
    setImage(URL.createObjectURL(blob));
  }

  async function handleEditCard() {
    const parsedValue = parseFloat((value.replace(/[^\d,]/g, '')).replace(',', '.'));
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("value", parsedValue);
    formData.append("form_of_payment", form_of_payment);
    formData.append("image", imageFile);
    formData.append("tag", status.toUpperCase());
    formData.append("link", link);
  
    await api.put(`/cards/${id}`, formData, {
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
          <img src={iconDelete}  alt="close" />
        </Link>
      </Header>
      { 
        data &&
        <Main>
          <Column>
            <Input 
              label={"Título *"} placeholder="Escreva o título do Card" 
              onChange={e => setTitle(e.target.value)}
              value={title}
            />

            <Input 
              label={"Descrição"} inputType={"textarea"} placeholder="Escreva os pontos mais importantes do produto" 
              onChange={e => setDescription(e.target.value)}
              value={description}
            />

            <Input 
              label={"Valor *"} inputType={"currency"} placeholder="R$ 00,00" 
              onChange={e => setValue(e.target.value)}
              value={value}
            />

            <Input 
              label={"Forma de Pagamento *"} placeholder="Digite" 
              onChange={e => setFormOfPayment(e.target.value)}
              value={form_of_payment}
            />

            <Input 
              label={"Link do Produto *"} placeholder="Cole o link deste produto" 
              onChange={e => setLink(e.target.value)}
              value={link}
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
              { status == "APROVADO" ? (
                  <>
                    <option value="analisar">Analisar</option>
                    <option selected value="aprovado">Aprovado</option>
                  </>
                ) : (
                  <>
                    <option selected value="analisar">Analisar</option>
                    <option value="aprovado">Aprovado</option>
                  </>
                )
              }
              
            </Input>
          </Column>
        </Main>
      }
      <Footer>
        <Button title={"Salvar"} padding="8px 50px" fontSize="14px" onClick={handleEditCard}></Button>
      </Footer>
    </Container>
  )
}