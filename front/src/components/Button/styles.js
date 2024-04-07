import styled from 'styled-components';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    color:  ${({ theme }) => theme.COLORS.GRAY_100};

    border: none;
    border-radius: 4px;
    height: 100%;
    line-height: 19px;
    font-weight:700;

    &:disabled{
        opacity: 0.5;
    }
`;