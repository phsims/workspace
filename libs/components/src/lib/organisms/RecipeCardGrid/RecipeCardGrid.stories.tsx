import type { Meta, StoryObj } from '@storybook/react';
import { RecipeCardGrid } from './RecipeCardGrid';
import { mockRecipes } from '../../__mocks__/recipesData';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof RecipeCardGrid> = {
  component: RecipeCardGrid,
  title: '@organisms/RecipeCardGrid',
};
export default meta;
type Story = StoryObj<typeof RecipeCardGrid>;

export const Primary = {
  args: {
    ...mockRecipes,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Heading: Story = {
  args: { ...Primary.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to RecipeCardGrid!/gi)).toBeInTheDocument();
  },
};
