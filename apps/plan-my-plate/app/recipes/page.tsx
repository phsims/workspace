import { Suspense } from 'react';
import {
  HeaderBanner,
  HeaderBannerProps,
  Banner,
  RecipeCardGrid,
} from '@workspace/components';
import { getRandomRecipes } from '@spoonacular-api';

export default async function Recipes() {
  const data = await getRandomRecipes();

  const headerBannerContent: HeaderBannerProps = {
    title: 'Find Your Favorite Recipes with Ease',
    intro:
      "Explore a world of culinary delights with our extensive collection of recipes. Whether you're looking for quick weeknight dinners, healthy meal options, or indulgent treats, our recipe cards offer something for everyone. Browse, save, and start cooking today!",
    image: {
      src: '/soup.svg',
      height: 526,
      width: 526,
      alt: 'Find Your Favorite Recipes',
    },
    gridSplit: [8, 4],
  };

  return (
    <>
      <HeaderBanner {...headerBannerContent}></HeaderBanner>
      <Banner background="white">
        <Suspense fallback={<p>Loading recipes...</p>}>
          <RecipeCardGrid {...data} />
        </Suspense>
      </Banner>
    </>
  );
}
