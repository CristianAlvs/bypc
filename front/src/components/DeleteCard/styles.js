//aqui vou ter o estilo do botão//
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    
    background-color: white;
    width: 500px;

    padding: 30px;
    border-radius: 4px;

    text-align: center;

    > p {
        font-size: 20px;
        color: ${({theme })=> theme.COLORS.DARK_BLUE};
        font-weight: bold;

        margin-bottom: 24px;
    }
`;

export const Buttons = styled.div`
    > a > #btnExcluir {
        background-color: ${({theme })=> theme.COLORS.RED};
        margin-right: 20px;
    }

    > a > #btnCancelarExclusao {
        background-color: ${({theme })=> theme.COLORS.DARK_BLUE};
    }
`;