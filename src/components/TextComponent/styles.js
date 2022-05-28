import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium}
  `}
`;
