import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    width: 250px;
    height: max-content;

    box-shadow: 0px 0px 5px 1px rgba(17, 23, 58, 0.06);

    padding: 20px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    gap: 10px;

    cursor: pointer;
`;

export const Description = styled.div`
    color:  black;

    > h3 {
        font-size: 16px;
        font-weight: 700;
    }

    > p {
        font-size: 12px;
    }
`;