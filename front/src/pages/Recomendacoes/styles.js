import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding: 0px 150px;
`;

export const Content = styled.div`
    padding-bottom: 32px;

    > section:first-child {
        padding: 50px 0px 74px 0px;
    }

    > section {
        > h2 {
            color:  black;
            font-size: 20px;
            font-family: "Aldrich", sans-serif;

            > img {
                margin-left: 12px;
            }
        }
        
        > div {
            display: flex;
            gap: 22px;
            margin-top: 24px;
        }
    }
`;

