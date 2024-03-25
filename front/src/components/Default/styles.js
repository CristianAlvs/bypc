import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 29px;
    padding-bottom:6px;
    text-align: center;

    >h2 {
    padding-top: 29px;
    padding-bottom:6px;
    font-family: "Aldrich";
    font-weight: 400;
    font-size: 28px;
    color:${({theme })=> theme.COLORS.DARK_BLUE};
    }

    >p {
        padding-bottom: 29px;
        color: ${({theme })=> theme.COLORS.FONT_COLOR};
    
    }
`;







