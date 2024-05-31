import { Container, Grid } from '@mui/material';
import RecipeCard, {
  RecipeCardProps,
} from '../../molecules/RecipeCard/RecipeCard';

export interface RecipeCardGridProps {
  recipes: RecipeCardProps[];
}

export function RecipeCardGrid({ recipes }: RecipeCardGridProps) {
  return (
    <Container>
      {recipes && (
        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          sx={{ alignItems: 'stretch' }}
        >
          {recipes.map((recipe: RecipeCardProps) => (
            <Grid
              item
              lg={4}
              sm={6}
              xs={12}
              key={recipe.id}
              sx={{ display: 'flex' ,  alignItems: 'stretch',}}
            >
              <RecipeCard {...recipe} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default RecipeCardGrid;
