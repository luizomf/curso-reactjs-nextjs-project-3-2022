import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Testing</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground background={false}>
        <h1>Testing</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background light by default', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Testing</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
