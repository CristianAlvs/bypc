import { useState } from 'react';

import { Container, Description } from './styles';

export function CardRecomendacoes({ image, title, description }) {
  return (
    <Container>
      <img src={image} />
      <Description>
        <h3>{title}</h3>
        <p>{description}</p>
      </Description>
    </Container>
  )
}