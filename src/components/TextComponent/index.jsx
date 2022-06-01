import P from 'prop-types';
import ReactMarkdown from 'react-markdown';
import * as Styled from './styles';

export const TextComponent = ({ children }) => {
  return (
    <Styled.Container>
      <ReactMarkdown>{children}</ReactMarkdown>
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node,
};
