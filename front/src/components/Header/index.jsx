import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logo, Total, Navigation} from './styles';
import { Button } from '../Button'

import iconPC from '../../assets/iconPC.svg';
import iconUser from "../../assets/iconUser.svg";

export function Header() {
    const { signOut, user } = useAuth();

    const [total, setTotal] = useState();
    const [selectedNavItem, setSelectedNavItem] = useState(() => {
        const storedNavItem = localStorage.getItem('selectedNavItem');
        return storedNavItem ? storedNavItem : 'Meus Cards'; // Se não houver nada no localStorage, definir 'Meus Cards' como padrão
    });

    useEffect(() => {
        async function fetchCards() {
          const response = await api.get("/cards?user_id=1");

          const somaTotal = response.data.reduce((total, objeto) => {
            if(objeto.tag.name === "APROVADO") {
                return total + objeto.value;
            }

            return total;
          }, 0);

          setTotal(somaTotal);
        }
    
        localStorage.setItem('selectedNavItem', selectedNavItem);
        fetchCards()
    }, [selectedNavItem]);

    return(
        <Container>
            <Logo>
                <img src={iconPC} alt="Logo" />
                <p>BYPC</p> 
            </Logo>

            <Navigation>
                <ul>
                    <li>
                        <NavLink 
                            to="/Recomendacoes"
                            className={selectedNavItem === 'Recomendacoes' ? 'select' : ''}
                            onClick={() => {
                                setSelectedNavItem('Recomendacoes');
                                document.querySelector('.select').classList.remove('select'); // Remove a classe 'select' de qualquer elemento que já a tenha
                                currentTarget.classList.add('select'); // Adiciona a classe 'select' ao elemento atual (o que foi clicado)
                            }}
                        >
                            Recomendações
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/" 
                            className={selectedNavItem === 'Meus Cards' ? 'select' : ''}
                            onClick={() => {
                                setSelectedNavItem('Meus Cards');
                                document.querySelector('.select').classList.remove('select'); // Remove a classe 'select' de qualquer elemento que já a tenha
                                currentTarget.classList.add('select'); // Adiciona a classe 'select' ao elemento atual (o que foi clicado)
                            }}
                        >
                            Meus Cards
                        </NavLink>
                    </li>
                </ul>
            </Navigation>

            <div className='totalAndButton'>
                <Total>
                    <span>TOTAL</span>
                    <span>{total && user ? total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 00,00'}</span>
                </Total>

                <Link to={user ? "/new" : "/login"}>
                    <Button title="Novo Card" padding="12px" fontSize="18px"/>
                </Link>
            </div>
            
                
            <Profile>
                { user ?
                    <Link onClick={signOut}>
                        <p>Sair</p>
                        <img src={iconUser} alt="User" />  
                    </Link> : 
                    <Link to="/login">
                        <p>Login</p>
                        <img src={iconUser} alt="User" />  
                    </Link>
                }
            </Profile>

        </Container>
    )
}