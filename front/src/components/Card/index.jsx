import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

import { Button }from "../Button";

import iconDelete from '../../assets/iconDelete.svg';
import iconEdit from '../../assets/iconEdit.svg';
import imgPlacaMae from '../../assets/imgPlacaMae.png'

import { Container, Header, Tag, Title, ImageProduct, Description, Price, FormOfPayment } from './styles';

export function Card({ data }) {
  const { title, description, value, form_of_payment, image } = data;
  const { name } = data.tag;
  const { url } = data.link;

  const imagemUrl = `${api.defaults.baseURL}/files/${image}`;

  return (
    <Container>
      <Header>
        <Tag>{name}</Tag>

        <div className="actions">
          <Link to="/new">
            <img src={iconEdit}  alt="edit" />
          </Link>

          <Link to="/">
            <img src={iconDelete}  alt="delete" />
          </Link>
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