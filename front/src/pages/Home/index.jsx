import { Container } from './styles'

import { Header } from '../../components/Header'
import { Default } from '../../components/Default'

export function Home() {
  return (
    <Container>
      <Header />
      <Default/>
    </Container>
  )
}