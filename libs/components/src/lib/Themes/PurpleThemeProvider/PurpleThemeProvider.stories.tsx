import type { Meta, StoryObj } from '@storybook/react';
import { PurpleThemeProvider } from './PurpleThemeProvider';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PurpleThemeProvider> = {
  component: PurpleThemeProvider,
  title: 'PurpleThemeProvider',
};
export default meta;
type Story = StoryObj<typeof PurpleThemeProvider>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PurpleThemeProvider!/gi)).toBeTruthy();
  },
};
