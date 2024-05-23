import type { Meta, StoryObj } from '@storybook/react';
import { HeaderBanner, HeaderBannerProps } from './HeaderBanner';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof HeaderBanner> = {
  component: HeaderBanner,
  title: '@organisms/HeaderBanner',
};
export default meta;
type Story = StoryObj<typeof HeaderBanner>;

export const Primary = {
  args: {
    background: 'grey.light',
    gridSplit: [9, 3],
    title: 'Find Your Favorite Recipes with Ease',
    intro:
      "Explore a world of culinary delights with our extensive collection of recipes. Whether you're looking for quick weeknight dinners, healthy meal options, or indulgent treats, our recipe cards offer something for everyone. Browse, save, and start cooking today!",
    image: {
      src: '/soup.svg',
      height: 526,
      width: 526,
      alt: 'Find Your Favorite Recipes',
    },
  } as HeaderBannerProps,
};

export const Heading: Story = {
  args: { ...Primary.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Find Your Favorite Recipes with Ease/gi)).toBeInTheDocument();
  },
};
