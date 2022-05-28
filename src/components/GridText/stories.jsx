import { GridText } from '.';

import mock from './mock';

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
