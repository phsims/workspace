import type { Meta, StoryObj } from '@storybook/react';
import { TagComponent } from './TagComponent';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TagComponent> = {
  component: TagComponent,
  title: '@atoms/TagComponent',
};
export default meta;
type Story = StoryObj<typeof TagComponent>;

export const Primary = {
  args: {
    title: 'Welcome to TagComponent!',
    tags: ['tag1', 'tag2', 'tag3'],
  },
};

export const Heading: Story = {
  args: {...Primary.args},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TagComponent!/gi)).toBeInTheDocument();
  },
};
