import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Search> = {
  component: Search,
  title: '@organisms/Search',
};
export default meta;
type Story = StoryObj<typeof Search>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Search!/gi)).toBeInTheDocument();
  },
};
