import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Default } from '../../components/Default'
import { Card } from '../../components/Card'

import { api } from '../../services/api';
import { useEffect, useState } from 'react';

export function MeusCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const response = await api.get("/cards?user_id=1");
      setCards(response.data);
    }

    fetchCards()
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {
          cards.map(card => (
            <Card
              key={String(card.id)}
              data={card}
            />
          ))
        }
      </Content>
    </Container>
  )
}