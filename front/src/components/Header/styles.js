import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    display: flex;
    padding: 20px;
    gap: 46px;
    align-items: center;
    justify-content: center;
    padding-top: 34px;

    > .totalAndButton {
        display: flex;
        gap: 18px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    background-color:transparent ;
    border: none;
    font-size: 16px;
    gap: 8px;
    cursor: pointer;
    color: ${({theme })=> theme.COLORS.FONT_COLOR};

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

`;

export const Navigation = styled.nav`
    ul, a {
        display: flex;
        gap: 30px;
        font-family: "Aldrich";
        font-size: 20px;
        direction: none;
        color: ${({theme })=> theme.COLORS.GRAY_300};
    }

    ul li .select {
        color: ${({ theme }) => theme.COLORS.DARK_BLUE};
        font-weight: bold;
    }

    ul li{
        cursor: pointer;
    }
`;



export const Total = styled.div`
    display: flex;
    background-color: ${({theme })=> theme.COLORS.DARK_BLUE};
    color: ${({theme })=> theme.COLORS.GRAY_100};
    font-size: 18px;
    line-height: 19px;
    padding: 12px 30px;
    border-radius: 4px;
    gap: 12px;
    font-weight: 700;

    > span {
        width: max-content;
    }
`;

