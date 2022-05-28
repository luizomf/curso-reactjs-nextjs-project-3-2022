import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import { mockBase } from './mock';
import { fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

let e = {};
global.scrollTo = vi.fn(() => {
  e.preventDefault();
});

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });

  it('should scrollTo top', () => {
    e['preventDefault'] = vi.fn();
    renderTheme(<Base {...mockBase} />);
    const goTop = screen.getByLabelText(/Go to top/i);
    fireEvent.click(goTop);
    expect(e.preventDefault).toHaveBeenCalled();
  });
});
