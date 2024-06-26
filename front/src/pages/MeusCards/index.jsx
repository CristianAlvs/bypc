import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Default } from '../../components/Default'
import { Card } from '../../components/Card'

import { api } from '../../services/api';
import { useEffect, useState } from 'react';

export function MeusCards({ state }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const response = await api.get("/cards");
      setCards(response.data);
    }

    fetchCards()
  }, []);

  return (
    <Container>
      <Header />
      { state == "default" || cards.length === 0 
        ? <Default /> 
        : <Content>
            {
              cards.map(card => (
                <Card
                  key={String(card.id)}
                  data={card}
                />
              ))
            }
          </Content>
      }
    </Container>
  )
}