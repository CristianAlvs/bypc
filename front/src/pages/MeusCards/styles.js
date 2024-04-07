import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding: 0px 150px;

    display: grid;
    grid-template-rows:105px auto;
    grid-template-areas:
    "header"
    "content"
`;

export const Content = styled.div`
    grid-area: content;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;

    gap: 20px;
`;

