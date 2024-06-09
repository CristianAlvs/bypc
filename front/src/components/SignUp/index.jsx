import { useState } from 'react';
import { Container, Header, Main, Logo, Footer } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Input } from '../Input';
import { Button } from '../Button';

import iconPC from '../../assets/iconPC.svg';
import iconDelete from '../../assets/iconDelete.svg';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate("/login")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar o cadastro");
      }
    })
  }

  return (
    <Container>
      <Header>
        <Logo>
            <img src={iconPC} alt="clipboard" />
            <p>Crie sua conta</p>
        </Logo>

        <Link to="/">
          <img src={iconDelete}  alt="delete" />
        </Link>
      </Header>
      <Main>
        <Input 
          label={"Usuário"} placeholder="Digite" 
          onChange={e => setName(e.target.value)}
        />

        <Input 
          label={"Email"} placeholder="Digite" 
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          label={"Senha"} placeholder="Digite" 
          onChange={e => setPassword(e.target.value)}
        />

        <Input 
          label={"Confirme sua senha"} placeholder="Digite" 
          onChange={e => setTitle(e.target.value)}
        />
      </Main>
      <Footer>
        <Button 
          title={"Salvar"} 
          padding="8px 44px" 
          fontSize="14px" 
          backgroundColor="#384AAD" 
          onClick={handleSignUp}></Button>
      </Footer>
    </Container>
  )
}