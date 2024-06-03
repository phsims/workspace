


import Image from 'next/image';
import { Grid, Typography, Box } from '@mui/material';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';

import RatingComponent from '../../atoms/Rating/RatingComponent';
import formatTime from '../../utils/formatTime';
import Nutrients, { Nutrient } from '../../atoms/Nutrients/Nutrients';
import InfoIcon from '../../atoms/InfoIcon/InfoIcon';

export interface RecipeDetailsProps {
  recipeImg: string;
  title: string;
  servings: number;
  readyInMinutes: number;
  nutrients: Nutrient[];
}

export function RecipeDetails({
  recipeImg,
  title,
  servings,
  readyInMinutes,

  nutrients,
}: RecipeDetailsProps) {

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item md={6} xs={12}>
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
        md={6}
        xs={12}
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h1">{title}</Typography>

          <RatingComponent itemRating={ 0} />
        </Grid>

        <Grid item xs={12} sx={{
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
        }}>
          <InfoIcon
            icon={<RestaurantRoundedIcon fontSize="medium" color="primary" />}
            infoTitle="Serves:"
            text={servings.toString()}
          />

          <InfoIcon
            icon={<AccessAlarmRoundedIcon color="primary" fontSize="medium" />}
            infoTitle="Ready in:"
            text={formatTime(readyInMinutes)}
          />
        </Grid>

        {nutrients?.length > 0 && (
          <Grid item xs={12}>
            <Box >
              <Nutrients
                title="Nutritional information:"
                nutrients={nutrients}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default RecipeDetails;
