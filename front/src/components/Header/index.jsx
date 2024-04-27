import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container, Profile, Logo, Total, Navigation} from './styles';
import { Button } from '../Button'

import iconPC from '../../assets/iconPC.svg';
import iconUser from "../../assets/iconUser.svg";

export function Header() {
    const [total, setTotal] = useState();

    useEffect(() => {
        async function fetchCards() {
          const response = await api.get("/cards?user_id=1");

          const somaTotal = response.data.reduce((total, objeto) => {
            if(objeto.tag.name == "APROVADO") {
                return total + objeto.value;
            }

            return total;
          }, 0);

          setTotal(somaTotal);
        }
    
        fetchCards()
    }, []);

    return(
        <Container>
            <Logo>
                <img src={iconPC} alt="Logo" />
                <p>BYPC</p> 
            </Logo>

            <Navigation>
                <ul>
                    <li>Recomendações</li>
                    <li className="select">Meus Cards</li>
                </ul>
            </Navigation>

            <div className='totalAndButton'>
                <Total>
                    <span>TOTAL</span>
                    <span>{total ? total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 00,00'}</span>
                </Total>

                <Link to="/new">
                    <Button title="Novo Card" padding="12px" fontSize="18px"/>
                </Link>
            </div>
            
                
            <Profile>
                <p>Login</p>
                <img src={iconUser} alt="Login" />  
            </Profile>

        </Container>
    )
}