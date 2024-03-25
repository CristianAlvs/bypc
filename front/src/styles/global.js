import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body{
        background-color: ${({theme })=> theme.COLORS.BACKGROUND_900};
        color: ${({theme })=> theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;    
    }

    body, input, button, textarea, span, select {
        font-family:'Roboto';
        outline: none;
        font-size: 16px;
        border: none;
    }

    a {
        text-decoration: none;
    }

    button, a{
        cursor:pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }

    input::placeholder, 
    textarea::placeholder, 
    select option[disabled] {
        color: ${({theme })=> theme.COLORS.GRAY_300};
        font-size: 16px;
        font-weight: 400;
    }
`;

