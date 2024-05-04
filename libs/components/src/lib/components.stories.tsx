import type { Meta, StoryObj } from '@storybook/react';
import { Components } from './components';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Components> = {
  component: Components,
  title: 'Components',
};
export default meta;
type Story = StoryObj<typeof Components>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Components!/gi)).toBeTruthy();
  },
};
