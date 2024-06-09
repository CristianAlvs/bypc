import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";

import { Container} from './styles';
import { Button } from '../Button';

import imgContainers from '../../assets/imgContainers.svg';

export function Default() {
    const { user } = useAuth();

    return(
        <Container>
            <img src={imgContainers} alt="Cards" />
            <h2>Você não possui Cards</h2> 
            <p>Com o seu usuário logado, clique no botão abaixo para criar seu primeiro CARD</p>

            <Link to={user ? "/new" : "/login"}>
                <Button title="Novo Card" padding="12px 38px" height="44px"/>
            </Link>
        </Container>
    )
}