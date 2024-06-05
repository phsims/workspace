import Image from 'next/image';
import { Grid, Typography, Box } from '@mui/material';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';

import RatingComponent from '../../atoms/Rating/RatingComponent';
import formatTime from '../../utils/formatTime';
import Nutrients from '../../atoms/Nutrients/Nutrients';
import InfoIcon from '../../atoms/InfoIcon/InfoIcon';
import FillIcon from '../../atoms/FillIcon/FillIcon';
import TagComponent from '../../atoms/TagComponent/TagComponent';
import { Nutrient } from '../../types/Nutrient';

export interface RecipeDetailsProps {
  recipeImg: string;
  title: string;
  servings: number;
  readyInMinutes: number;
  nutrients: Nutrient[];
  aggregateLikes: number;
  healthScore: number;
  dishTypes: string[];
  cuisines: string[];
  diets: string[];
}

export function RecipeDetails({
  recipeImg,
  title,
  servings,
  readyInMinutes,
  nutrients,
  aggregateLikes,
  healthScore,
  dishTypes,
  cuisines,
  diets,
}: RecipeDetailsProps) {
  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item lg={6} md={5} xs={12}>
          <Image
            src={recipeImg}
            alt={title}
            title={title}
            width={556}
            height={370}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '2rem',
            }}
          />
        </Grid>
        <Grid
          item
          lg={6}
          md={7}
          xs={12}
          sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}
        >
          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Grid item xs={12}>
              <RatingComponent itemRating={0} />
              <InfoIcon
                icon={
                  <RestaurantRoundedIcon fontSize="medium" color="primary" />
                }
                infoTitle="Serves:"
                text={servings.toString()}
              />

              <InfoIcon
                icon={
                  <AccessAlarmRoundedIcon color="primary" fontSize="medium" />
                }
                infoTitle="Ready in:"
                text={formatTime(readyInMinutes)}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
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
            </Grid>

            {nutrients?.length > 0 && (
              <Grid item xs={12}>
                <Box>
                  <Nutrients
                    title="Nutritional information:"
                    nutrients={nutrients}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
          >
            {dishTypes?.length > 0 && (
              <TagComponent
                tags={dishTypes}
                varient="outlined"
                title="Great for:"
              />
            )}
            {cuisines?.length > 0 && (
              <TagComponent
                tags={cuisines}
                varient="outlined"
                color="success"
                title="Cuisine:"
              />
            )}
            {diets?.length > 0 && (
              <TagComponent
                tags={diets}
                varient="outlined"
                color="secondary"
                title="Suitable for:"
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default RecipeDetails;
