import { useState } from 'react';
import { Container, Header, Main, Logo, Footer } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';
import { Button } from '../Button';

import iconPC from '../../assets/iconPC.svg';
import iconDelete from '../../assets/iconDelete.svg';

export function SignIn() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();
  const { signIn } = useAuth();
  
  function handleSignIn() {
    const user = signIn({ email, password });

    if(user){
      navigate("/");
    }
  }

  return (
    <Container>
      <Header>
        <Logo>
            <img src={iconPC} alt="clipboard" />
            <p>Login</p>
        </Logo>

        <Link to="/">
          <img src={iconDelete}  alt="delete" />
        </Link>
      </Header>
      <Main>
        <Input 
          label={"Email"} placeholder="Digite" 
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          label={"Senha"} placeholder="Digite" type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <p>Não tem uma conta?</p>
        <p>Clique no botão abaixo para criar uma</p>
      </Main>
      <Footer>
        <Link to="/signup">
          <Button title={"Criar"} padding="8px 44px" fontSize="14px"></Button>
        </Link>
        <Button title={"Entrar"} onClick={handleSignIn} padding="8px 44px" fontSize="14px" backgroundColor="#384AAD"></Button>
      </Footer>
    </Container>
  )
}