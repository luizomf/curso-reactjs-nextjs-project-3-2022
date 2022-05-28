import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { screen } from '@testing-library/react';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>The text</TextComponent>);
    const element = screen.getByText(/The text/i);
    expect(element).toBeInTheDocument();
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(<TextComponent>The text</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
