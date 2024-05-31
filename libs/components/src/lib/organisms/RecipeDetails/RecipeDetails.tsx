import Image from 'next/image';
import { Grid, Typography, Box } from '@mui/material';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';

import RatingComponent from '../../atoms/Rating/RatingComponent';
import formatTime from '../../utils/formatTime';
import Nutrients, { Nutrient } from '../../atoms/Nutrients/Nutrients';

export interface RecipeDetailsProps {
  sourceName: string;
  sourceUrl: string;
  recipeImg: string;
  title: string;
  servings: number;
  readyInMinutes: number;
  spoonacularScore: number;
  nutrients: Nutrient[];
}

export function RecipeDetails({
  recipeImg,
  title,
  servings,
  readyInMinutes,
  spoonacularScore,
  nutrients,
}: RecipeDetailsProps) {
  const rating = Math.round((spoonacularScore / 20) * 2) / 2;

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
      <Grid item md={6} xs={12}>
        <Typography variant="h1">{title}</Typography>
        <Box
          sx={{
            mb: '1.5rem',
          }}
        >
          <RatingComponent itemRating={rating} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
          <RestaurantRoundedIcon fontSize="medium" color="primary" />
          <Typography variant="body1_Bold" color={'grey.dark'}>
            Serves:
          </Typography>
          <Typography variant="body1" color={'grey.dark'}>
            {servings}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
          <AccessAlarmRoundedIcon color="primary" fontSize="medium" />
          <Typography variant="body1_Bold" color={'grey.dark'}>
            Ready in:
          </Typography>
          <Typography variant="body1" color={'grey.dark'}>
            {formatTime(readyInMinutes)}
          </Typography>
        </Box>

        {nutrients.length > 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1_Bold" color={'grey.dark'}></Typography>
            <Nutrients title="Nutritional information" nutrients={nutrients} />
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default RecipeDetails;
