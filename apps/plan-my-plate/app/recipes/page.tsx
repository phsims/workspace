import { Container, Grid } from '@mui/material';
import {
  HeaderBanner,
  HeaderBannerProps,
  RecipeCard,
  RecipeCardProps,
} from '@workspace/components';
import { getRecipes } from '../actions/getRecipes';

export default async function Recipes() {
  const data = await getRecipes();

  const headerBannerContent: HeaderBannerProps = {
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
  };

  return (
    <>
      <HeaderBanner {...headerBannerContent}></HeaderBanner>
      <Container sx={{ mb: 5, mt: 5, background: 'primary.light' }}>
        <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
          {data?.recipes?.map((recipe: RecipeCardProps) => (
            <Grid item md={4} key={recipe.id} sx={{ display: 'flex' }}>
              <RecipeCard {...recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
