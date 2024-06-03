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
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import CurrencyPoundRoundedIcon from '@mui/icons-material/CurrencyPoundRounded';
import DOMPurify from 'isomorphic-dompurify';

import {
  Banner,
  FillIcon,
  InfoIcon,
  RecipeDetails,
  RecipeDetailsProps,
  TagComponent,
} from '@workspace/components';
import { getSpoonConfig } from '../../middleware/setup';
import styles from './page.module.scss';

async function getData(id: number) {
  const { baseUrl, headers } = getSpoonConfig();
  try {
    const info = await fetch(`${baseUrl}/recipes/${id}/information`, {
      headers,
    });

    const nutrition = await fetch(
      `${baseUrl}/recipes/${id}/nutritionWidget.json`,
      {
        headers,
      }
    );

    if (!info.ok) {
      throw new Error('Failed to fetch data');
    }

    const recipeInfo = await info.json();
    const nutritionalInfo = await nutrition.json();

    const data = { ...recipeInfo, ...nutritionalInfo };

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export interface IdProps {
  params: {
    id: number;
  };
}

export default async function Page({ params }: IdProps) {
  const { imgUrl } = getSpoonConfig();

  const {
    title,
    summary,
    servings,
    image,
    readyInMinutes,
    nutrients,
    creditsText,
    sourceUrl,
    dishTypes,
    cuisines,
    diets,
    extendedIngredients,
    instructions,
    aggregateLikes,
    healthScore,
    cheap,
  } = await getData(params?.id);

  const largImage = `${imgUrl}/recipes/${params.id}-636x393.jpg`;

  const recipeData: RecipeDetailsProps = {
    recipeImg: largImage || image,
    title,
    servings,
    readyInMinutes,
    nutrients,
  };

  const cleanSummery = DOMPurify.sanitize(summary);
  console.log('aggregateLikes', diets);
  return (
    <>
      <Head>
        <link rel="canonical" href={sourceUrl} key="canonical" />
      </Head>

      <Banner background="grey.light">
        <Container>
          <RecipeDetails {...recipeData} />
        </Container>
      </Banner>
      <Banner background="secondary.light" size="small">
        <Container sx={{ display: 'flex', flexDirection: 'row', gap: 8, justifyContent:'space-between' }}>
          {dishTypes?.length > 0 && (
            <TagComponent
              title="Great for"
              tags={dishTypes}
              varient="filled"
            />
          )}
          {cuisines?.length > 0 && (
            <TagComponent title="Cuisine" tags={cuisines} varient="filled"/>
          )}
          {diets?.length > 0 && (
            <TagComponent
              title="Suitable for"
              tags={diets}
              varient="filled"
              color="success"
            />
          )}
          <Box>
            {cheap && (
              <InfoIcon
                infoTitle={`Low cost`}
                icon={
                  <CurrencyPoundRoundedIcon color="success" fontSize="medium" />
                }
              />
            )}
            <InfoIcon
              infoTitle={`Health score ${healthScore}`}
              icon={
                <FillIcon
                  fillPercentage={healthScore}
                  ariaLabel={`Health score ${healthScore}`}
                />
              }
            />
            {aggregateLikes && (
              <InfoIcon
                infoTitle={`${aggregateLikes} likes`}
                icon={
                  <ThumbUpRoundedIcon color="secondary" fontSize="medium" />
                }
              />
            )}
          </Box>
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
                  ({ name, measures }: any, index: number) => (
                    <ListItem key={index}>
                      <Typography variant="body1_Bold" mb={0} mr={0.5}>
                        {Math.round(measures?.metric.amount * 4) / 4} {measures?.metric.unitShort}{' '}
                        {name}
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
    </>
  );
}
