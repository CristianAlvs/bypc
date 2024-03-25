import { Link } from 'react-router-dom';

import { Container, Profile, Logo, Total, Navigation} from './styles';
import { Button } from '../Button'

import iconPC from '../../assets/iconPC.svg';
import iconUser from "../../assets/iconUser.svg";

export function Header() {
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
                    <span>R$ 12,00</span>
                </Total>

                <Link to="/new">
                    <Button title="Novo Card" />
                </Link>
            </div>
            
                
            <Profile>
                <p>Login</p>
                <img src={iconUser} alt="Login" />  
            </Profile>

        </Container>
    )
}