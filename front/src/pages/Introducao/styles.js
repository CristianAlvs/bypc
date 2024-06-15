import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    place-content: center;

    background-color: ${({ theme })=> theme.COLORS.BACKGROUND};
`;

export const Main = styled.div`
    text-align: center;

    > img {
        width: 62px;
        margin-bottom: 14px;
    }

    h1 {
        font-weight: 100;
        font-size: 28px;
        color: black;
        font-family: "Aldrich", sans-serif;
    }

    p {
        color: ${({ theme })=> theme.COLORS.FONT_COLOR};
    }

    > p {
        margin-bottom: 30px;
    }

    strong {
        color: black;
    }
`;

export const Card = styled.div`
    width: 790px;
    padding: 40px 40px 60px 40px;

    display: flex;
    gap: 34px;

    background-color: white;
    box-shadow: 0px 5px 11.8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`;

export const ImgContainer = styled.div`
    border-radius: 4px;

    min-width: 448px;
    min-height: 246px;
`;

export const InfoContainer = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 80px;
        font-family: "Aldrich", sans-serif;
        color: #00DC16;
    }

    p {
        flex: 1;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 6px;

        background-color: transparent;
    }

    button.back {
        color: ${({ theme })=> theme.COLORS.FONT_COLOR};
    }

    button.next {
        color: ${({ theme })=> theme.COLORS.DARK_BLUE};
    }
`;