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
    width: 344px;

    padding: 30px;
    border-radius: 4px;
    background-color: ${({ theme })=> theme.COLORS.GRAY_100};
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
    flex-direction: column;
    gap: 6px;
    padding: 16px 0;

    > p {
        font-size: 12px;
        color: ${({ theme })=> theme.COLORS.FONT_COLOR};
    }
`;

export const Footer = styled.footer`
    grid-area: footer;

    display: flex;
    justify-content: space-between;

    text-align: right;
`;

export const Logo = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;

    > p {
        font-family: "Aldrich", sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: black;
    }

    > img {
        width: 19px;
    }

`;


