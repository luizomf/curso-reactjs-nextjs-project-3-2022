import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';
import { expect, describe, it, vi } from 'vitest';

// global.scrollTo = vi.fn();

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchSnapshot();
  });

  it('should render a go to top button', () => {
    const spy = vi.fn();
    renderTheme(<GoTop handleClick={spy} />);
    const goTop = screen.getByRole('link', { name: 'Go to top' });
    fireEvent.click(goTop);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
