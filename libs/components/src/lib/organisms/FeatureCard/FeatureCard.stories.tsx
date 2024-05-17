import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from './FeatureCard';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Box } from '@mui/material';

const meta: Meta<typeof FeatureCard> = {
  component: FeatureCard,
  title: '@organisms/FeatureCard',
  decorators: [
    (Story) => (
      <Box sx={{width:345,mt:'5rem'}}>
        <Story />
      </Box>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Primary = {
  args: {
    title: "Shopping List Generator",
    description: "Automatically generate shopping lists from your meal plans.",
    image: "/featureFour.svg",
  },
};

export const Heading: Story = {
  args: {...Primary.args},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FeatureCard!/gi)).toBeInTheDocument();
  },
};
