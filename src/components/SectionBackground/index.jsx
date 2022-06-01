import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

const random = () =>
  `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  const id = sectionId ? sectionId : random();

  return (
    <Styled.Container background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
};
