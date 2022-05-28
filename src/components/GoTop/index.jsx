import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <Styled.Container
      href="#"
      onClick={handleClick}
      aria-label="Go to top"
      title="Go to top"
    >
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
