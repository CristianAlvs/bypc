import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { Button }from "../Button";

import { Container, Buttons } from './styles';

export function DeleteCard({ id }) {

  async function deleteCard() {
    await api.delete(`/cards/${id}`);
    window.location.reload();
  };

  return (
    <Container>
      <p>
        Deseja realmente excluir este Card?
      </p>
      <Buttons>
        <Link to="/">
          <Button id="btnExcluir" title={"Sim"} padding="6px 28px" fontSize="16px" onClick={deleteCard}></Button>
        </Link>
        <Link to="/">
          <Button id="btnCancelarExclusao" title={"Não"} padding="6px 28px" fontSize="16px"></Button>
        </Link>
      </Buttons>
    </Container>
  )
}