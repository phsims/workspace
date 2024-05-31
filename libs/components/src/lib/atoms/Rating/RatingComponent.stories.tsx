import type { Meta, StoryObj } from '@storybook/react';
import { RatingComponent } from './RatingComponent';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof RatingComponent> = {
  component: RatingComponent,
  title: '@atoms/Rating',
};
export default meta;
type Story = StoryObj<typeof RatingComponent>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Rating!/gi)).toBeInTheDocument();
  },
};
