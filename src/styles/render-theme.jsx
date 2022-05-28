import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import PropTypes from 'prop-types';

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export const renderTheme = (children) => {
  const rendered = render(<Theme>{children}</Theme>);

  const { rerender } = rendered;
  rendered.rerender = (children) => rerender(<Theme>{children}</Theme>);

  return rendered;
};
