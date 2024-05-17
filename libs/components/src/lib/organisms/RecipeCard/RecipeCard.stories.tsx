import type { Meta, StoryObj } from '@storybook/react';
import { RecipeCard } from './RecipeCard';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Box } from '@mui/material';

const meta: Meta<typeof RecipeCard> = {
  component: RecipeCard,
  title: '@organisms/RecipeCard',
  decorators: [
    (Story) => (
      <Box sx={{width:345,}}>
        <Story />
      </Box>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof RecipeCard>;

export const Primary = {
  args: {
    id:222,
    image:'/contemplative-reptile.jpg',
    title:'Lizard',
    summary:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  link:'/link1'
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Heading: Story = {
  args: {...Primary.args},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Lizard/gi)).toBeInTheDocument();
  },
};
