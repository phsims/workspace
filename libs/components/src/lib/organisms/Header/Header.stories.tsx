import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Header> = {
  component: Header,
  title: '@organisms/Header',
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Primary = {
  args: {
    title:'My cool app',
    headerNav:[
      { link: '/link1', text: 'link 1' },
      { link: '/link2', text: 'link 2' },
    ]
  },
};

export const Heading: Story = {
  args: {...Primary.args},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/My cool app /gi)).toBeInTheDocument();
  },
};
