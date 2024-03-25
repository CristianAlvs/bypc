import styled from 'styled-components';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    color:  ${({ theme }) => theme.COLORS.GRAY_100};

    border: none;
    border-radius: 4px;
    padding: 12px 38px;
    line-height: 19px;
    font-weight:700;
    font-size: 18px;

    &:disabled{
        opacity: 0.5;
    }
`;