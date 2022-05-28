import { GridTwoColum } from '.';

import mock from './mock';

export default {
  title: 'GridTwoColum',
  component: GridTwoColum,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColum {...args} />
    </div>
  );
};
