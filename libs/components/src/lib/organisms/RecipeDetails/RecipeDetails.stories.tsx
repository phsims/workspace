import type { Meta, StoryObj } from '@storybook/react';
import { RecipeDetails } from './RecipeDetails';
import { Box } from '@mui/material';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { mockNutrients } from '../../__mocks__/nutrientsData';
import { mockRecipes } from '../../__mocks__/recipesData';


const meta: Meta<typeof RecipeDetails> = {
  component: RecipeDetails,
  title: '@organisms/RecipeDetails',
  decorators: [
    (Story) => (
      <Box sx={{ width: '900px', m: 3, background: 'grey.light' }}>
        <Story />
      </Box>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof RecipeDetails>;

export const Primary = {
  args: {
    ...mockRecipes.recipes[0],
    nutrients:mockNutrients,
    recipeImg: '/652825-556x370.webp',
  },
};

export const Heading: Story = {
  args: { ...Primary.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/My Asian Calamari/gi)).toBeInTheDocument();
  },
};
