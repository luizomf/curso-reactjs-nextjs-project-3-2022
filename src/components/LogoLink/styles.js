import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.a`
  ${() => css`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;


    > img {
      max-height: 3rem;
    }
  `}
`;
