import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid ${({theme })=> theme.COLORS.GRAY_200};
    border-radius: 4px;
    padding: 12px 18px;  
    margin-bottom: 12px;  
    width: 100%;

    > label {
        font-size: 12px;
        font-weight: 400;
        color: ${({theme })=> theme.COLORS.PRIMARY_COLOR};
        display: block;
        margin-bottom: 6px;
    }

    > input {
        width:100%;
        background-color: transparent;
    }

    > textarea {
        background-color: transparent;
        outline: none;
        resize: none;    
        width: 100%;
        height: 85px;
    }

    > select {
        outline: none;
        background-color: transparent;
        width: 100%;
        cursor: pointer;
    }
`;