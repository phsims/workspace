import { Container, Grid } from '@mui/material';
import { RecipeCard, RecipeCardProps } from '@workspace/components';

async function getData() {
  const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  if (!API_KEY) {
    throw new Error('Spoonacular API key is not provided');
  }
  
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
    }
  );
  const data = await res.json();

  return data;
}

export default async function Recipes() {
  const data = await getData();

  return (
    <Container sx={{mb:5,mt:5, background:'primary.light'}} >
      <Grid container spacing={2}>
        {data.recipes?.map((recipe: RecipeCardProps) => (
          <Grid item md={4} key={recipe.id}>
            <RecipeCard {...recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
