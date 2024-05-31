import type { Meta, StoryObj } from '@storybook/react';
import { TagComponent } from './TagComponent';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TagComponent> = {
  component: TagComponent,
  title: 'TagComponent',
};
export default meta;
type Story = StoryObj<typeof TagComponent>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TagComponent!/gi)).toBeInTheDocument();
  },
};
