import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Button }from "../Button";

import iconDelete from '../../assets/iconDelete.svg';
import iconEdit from '../../assets/iconEdit.svg';

import { Container, Header, Tag, Title, ImageProduct, Description, Price, FormOfPayment } from './styles';

export function Card({ data }) {
  const { id, title, description, value, form_of_payment, image } = data;
  const tag = data.tag.name;
  const url = data.link.url;

  const imagemUrl = `${api.defaults.baseURL}/files/${image}`;

  const navigate = useNavigate();

  function handleCard(id) {
    navigate(`/cards/${id}`);
  };

  async function deleteCard(id) {
    await api.delete(`/cards/${id}`);
    window.location.reload();
  };

  return (
    <Container>
      <Header>
        <Tag className={tag == 'APROVADO' ? 'aprovado' : 'analisar'}>
          {tag}
        </Tag>

        <div className="actions">
          <img src={iconEdit}  alt="edit" onClick={() => handleCard(id)}/>
          <img src={iconDelete}  alt="delete" onClick={() => deleteCard(id)}/>
        </div>
      </Header>
      <main>
        <Title>{ title }</Title>
        <ImageProduct>
          <img src={imagemUrl} alt="imagem do produto" />
        </ImageProduct>
        <Description>{ description }</Description>
      </main>
      <footer>
        <Price>R$ {value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Price>
        <FormOfPayment>{ form_of_payment }</FormOfPayment>
        <a href={url} target='_blank'>
          <Button title={"Comprar"} padding="8px 50px" fontSize="14px"></Button>
        </a>
      </footer>
    </Container>
  )
}