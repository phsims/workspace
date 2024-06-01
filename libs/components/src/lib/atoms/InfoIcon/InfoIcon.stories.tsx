import type { Meta, StoryObj } from '@storybook/react';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';

import { InfoIcon } from './InfoIcon';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof InfoIcon> = {
  component: InfoIcon,
  title: '@atoms/InfoIcon',
};
export default meta;
type Story = StoryObj<typeof InfoIcon>;

export const Primary = {
  args: {
    icon: <RestaurantRoundedIcon fontSize="medium" color="primary" />,
    infoTitle: 'Serves:',
    text: '4',
  },
};

export const Heading: Story = {
  args: { ...Primary.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to InfoIcon!/gi)).toBeInTheDocument();
  },
};
