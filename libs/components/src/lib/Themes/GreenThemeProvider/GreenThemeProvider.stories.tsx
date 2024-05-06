import type { Meta, StoryObj } from '@storybook/react';
import { GreenThemeProvider } from './GreenThemeProvider';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof GreenThemeProvider> = {
  component: GreenThemeProvider,
  title: 'GreenThemeProvider',
};
export default meta;
type Story = StoryObj<typeof GreenThemeProvider>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to GreenThemeProvider!/gi)).toBeTruthy();
  },
};
