import { Link } from 'react-router-dom';

import { Container} from './styles';
import { Button } from '../Button';

import imgContainers from '../../assets/imgContainers.svg';

export function Default() {
    return(
        <Container>
            <img src={imgContainers} alt="Cards" />
            <h2>Você não possui Cards</h2> 
            <p>Com o seu usuário logado, clique no botão abaixo para criar seu primeiro CARD</p>

            <Link to="/new">
                <Button title="Novo Card" />
            </Link>
        </Container>
    )
}