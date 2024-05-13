import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from './ButtonLink';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ButtonLink> = {
  component: ButtonLink,
  title: 'ButtonLink',
};
export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Primary = {
  args: {
    text: 'Test Button',
    link: '/test',
  },
};

export const Heading: Story = {
  args: { ...Primary.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ButtonLink!/gi)).toBeTruthy();
  },
};
