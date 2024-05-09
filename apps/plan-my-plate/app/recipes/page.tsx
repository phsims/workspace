import { Container, Grid } from '@mui/material';
import { RecipeCard, RecipeCardProps } from '@workspace/components';
import { getRecipes } from '../actions/getRecipes';

export default async function Recipes() {
  
  const data = await getRecipes();

  return (
    <Container sx={{ mb: 5, mt: 5, background: 'primary.light' }}>
      <Grid container spacing={2} alignItems='stretch'>
        {data?.recipes?.map((recipe: RecipeCardProps) => (
          <Grid item md={4} key={recipe.id} sx={{ display: 'flex' }} >
            <RecipeCard {...recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
