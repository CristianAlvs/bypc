import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid ${({theme })=> theme.COLORS.GRAY_200};
    border-radius: 4px;
    padding: 12px 18px;  
    margin-bottom: 12px;  
    width: 100%;
    cursor: pointer;

    > label {
        font-size: 12px;
        font-weight: 400;
        color: ${({theme })=> theme.COLORS.PRIMARY_COLOR};

        display: flex;
        flex-direction: column;
        height: 100%;

        margin-bottom: 6px;
        cursor: pointer;
    }

    > input {
        display: none;
        cursor: pointer;
    }
`;

export const ButtonUploadImage = styled.div`
    display: grid;
    place-content: center;
    gap: 24px;
    flex: 1;

    > div {
        border-radius: 3px;
        border: 1px solid ${({theme })=> theme.COLORS.GRAY_300};
        background-color: transparent;
        padding: 8px 24px;
        margin: auto;
        font-size: 13px;
        font-weight: 700;
        color: ${({theme })=> theme.COLORS.GRAY_300};
        cursor: pointer;
    }

    > img {
        max-width: 400px;
        max-height: 250px;
    }
`;