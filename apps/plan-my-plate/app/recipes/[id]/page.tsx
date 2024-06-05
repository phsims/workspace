import Head from 'next/head';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import DOMPurify from 'isomorphic-dompurify';

import {
  Banner,
  InfoIcon,
  RecipeCardGrid,
  RecipeDetails,
  RecipeDetailsProps,
} from '@workspace/components';

import {
  getNutrition,
  getRecipe,
  getImage,
  getSimilarRecipes,
} from '../../utils';
import styles from './page.module.scss';

export interface IdProps {
  params: {
    id: number;
  };
}

interface Measurements {
  name: string;
  measures: {
    metric: {
      amount: number;
      unitShort: string;
    };
  };
}

export default async function Page({ params }: IdProps) {
  const recipe = getRecipe(params?.id);
  const nutrition = getNutrition(params?.id);
  const similarRecipes = getSimilarRecipes(params?.id);
  const largeImage = getImage(params?.id, 'large');

  const [recipeData, nutritionData, similarRecipeData] = await Promise.all([
    recipe,
    nutrition,
    similarRecipes,
  ])
    .then(([recipeData, nutritionData, similarRecipeData]) => {
      return Promise.all([recipeData, nutritionData, similarRecipeData]);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
      throw error;
    });

  const {
    title,
    servings,
    readyInMinutes,
    aggregateLikes,
    healthScore,
    dishTypes,
    cuisines,
    diets,
    summary,
    sourceUrl,
    creditsText,
    extendedIngredients,
    instructions,
  } = recipeData;

  const recipeDetails: RecipeDetailsProps = {
    title,
    servings,
    readyInMinutes,
    aggregateLikes,
    healthScore,
    dishTypes,
    cuisines,
    diets,
    recipeImg: largeImage,
    nutrients: nutritionData,
  };

  const cleanSummery = DOMPurify.sanitize(summary);
  return (
    <>
      <Head>
        <link rel="canonical" href={sourceUrl} key="canonical" />
      </Head>

      <Banner background="grey.light">
        <Container>
          <RecipeDetails {...recipeDetails} />
        </Container>
      </Banner>
      <Banner>
        <Container>
          <Box mb={5}>
            <Typography variant="h2">Summary</Typography>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{ __html: cleanSummery }}
            />
            <InfoIcon
              infoTitle="Author:"
              icon={
                <StickyNote2RoundedIcon color="primary" fontSize="medium" />
              }
              link={{ href: sourceUrl, text: creditsText }}
            />
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h2">Ingredients</Typography>
              <List>
                {extendedIngredients.map(
                  ({ name, measures }: Measurements, index: number) => (
                    <ListItem key={index}>
                      <Typography variant="body1_Bold" mb={0} mr={0.5}>
                        {Math.round(measures?.metric.amount * 4) / 4}{' '}
                        {measures?.metric.unitShort} {name}
                      </Typography>
                    </ListItem>
                  )
                )}
              </List>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h2">Instructions</Typography>
              <Typography
                className={styles['recipe-instructions']}
                variant="body1"
                dangerouslySetInnerHTML={{ __html: instructions }}
              />
            </Grid>
          </Grid>
        </Container>
      </Banner>
      {similarRecipeData && (
        <Banner>
          <Container>
            <RecipeCardGrid recipes={similarRecipeData} />
          </Container>
        </Banner>
      )}
    </>
  );
}
