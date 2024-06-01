import type { Meta, StoryObj } from '@storybook/react';
import { Nutrients } from './Nutrients';
import { mockNutrients } from '../../__mocks__/nutrientsData';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Nutrients> = {
  component: Nutrients,
  title: '@atoms/Nutrients',
};
export default meta;
type Story = StoryObj<typeof Nutrients>;

export const Primary = {
  args: {
    title:"Nutritional information:",
    nutrients:  mockNutrients,
  },
};

export const Heading: Story = {
  args: { ...Primary.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Nutritional information:/gi)).toBeInTheDocument();
  },
};
