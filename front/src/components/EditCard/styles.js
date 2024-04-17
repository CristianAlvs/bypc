//aqui vou ter o estilo do botão//
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    
    display: grid;
    grid-template-rows: auto auto;
    grid-template-areas:
    "header"
    "main"
    "footer";
    grid-gap: 20px;
    
    background-color: white;
    width: 1000px;

    padding: 30px;
    border-radius: 4px;
`;

export const Header = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
        cursor: pointer;
    }
`;

export const Main = styled.main`
    grid-area: main;

    display: flex;
    gap: 18px;
`;

export const Column = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    > :first-child { /* Seleciona o primeiro filho de Column */
        flex: 1;
    }
`;

export const Footer = styled.footer`
    grid-area: footer;

    text-align: right;
`;