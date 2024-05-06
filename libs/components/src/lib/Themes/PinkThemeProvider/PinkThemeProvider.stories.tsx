import type { Meta, StoryObj } from '@storybook/react';
import { PinkThemeProvider } from './PinkThemeProvider';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PinkThemeProvider> = {
  component: PinkThemeProvider,
  title: 'PinkThemeProvider',
};
export default meta;
type Story = StoryObj<typeof PinkThemeProvider>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PinkThemeProvider!/gi)).toBeTruthy();
  },
};
