import type { Meta, StoryObj } from '@storybook/react';
import { FillIcon } from './FillIcon';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FillIcon> = {
  component: FillIcon,
  title: '@atoms/FillIcon',
};
export default meta;
type Story = StoryObj<typeof FillIcon>;

export const Primary = {
  args: {
    fillPercentage: 50,
  },
};

export const Heading: Story = {
  args: {...Primary.args},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FillIcon!/gi)).toBeInTheDocument();
  },
};
