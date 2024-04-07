//aqui vou ter o estilo do botão//
import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    width: 250px;
    height: max-content;

    box-shadow: 0px 0px 5px 1px rgba(17, 23, 58, 0.06);

    padding: 18px;
    border-radius: 4px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .actions {
        display: flex;
        gap: 6px;

        img {
            cursor: pointer;
            height: 22px;
        }
    }
`;

export const Tag = styled.div`
    font-size: 12px;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 4px;

    background-color: ${({theme })=> theme.COLORS.GREEN};
    color: white;
`;

export const Title = styled.h2`
    font-size: 16px;
    font-weight: bold;
    margin-top: 22px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    height: 3.5rem; /* Altura equivalente a 4 linhas */

    color: ${({theme })=> theme.COLORS.FONT_COLOR};
`;

export const ImageProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 190px;

    margin: 8px 0px;

    > img {
        max-width: 190px;
        max-height: 190px;
    }
`;

export const Description = styled.p`
    font-size: 16px;
    color: ${({theme })=> theme.COLORS.FONT_COLOR};

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    height: 4.5rem; /* Altura equivalente a 4 linhas */
`;

export const Price = styled.p`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: ${({theme })=> theme.COLORS.GREEN};
`;

export const FormOfPayment = styled.p`
    font-size: 14px;
    color: ${({theme })=> theme.COLORS.FONT_COLOR};
    margin-bottom: 14px;
`;
