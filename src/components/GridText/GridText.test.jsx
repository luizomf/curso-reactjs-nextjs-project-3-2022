import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';

import mock from './mock';

describe('<GridText />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
