import { Box, Typography } from '@mui/material';
import { Nutrient } from '../../types/Nutrient';

export interface NutrientsProps {
  nutrients: Nutrient[];
  title?: string;
}

export function Nutrients({ nutrients, title }: NutrientsProps) {
  function getTitle(name: string) {
    switch (name) {
      case 'calories':
        return 'kcal';
      case 'fat':
        return 'Fat';
      case 'carbohydrates':
        return 'Carbs';
      case 'protein':
        return 'Protein';
      default:
        return name;
    }
  }

  return (
    <>
      <Typography variant="body1_Bold" color={'grey.dark'}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0.5rem',
          mb: 1,
          justifyContent: 'space-between',
        }}
      >
        {nutrients.map(({ name, value }) => (
          <Box
            key={name}
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              padding: '0.5rem',
              backgroundColor: 'success.light',
              borderRadius: '0.5rem',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body1_Bold"
              color={'grey.dark'}
              sx={{ mb: 0 }}
              fontSize="small"
            >
              {getTitle(name)}
            </Typography>
            <Typography
              variant="body1"
              color={'grey.dark'}
              sx={{ mb: 0 }}
              fontSize="small"
            >
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Nutrients;
