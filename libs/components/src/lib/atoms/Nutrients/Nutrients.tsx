import { Box, Typography } from '@mui/material';

export interface NutrientsProps {
  nutrients: Nutrient[];
  title?: string;
}

export interface Nutrient {
  name: string;
  amount: number;
  unit: string;
}

export function Nutrients({ nutrients, title }: NutrientsProps) {
  const viewNutrients = ['Calories', 'Fat', 'Carbohydrates', 'Protein'];
  const filteredNutrients = nutrients
    ? nutrients.filter((nutrient) => viewNutrients.includes(nutrient.name))
    : [];

  function getTitle(name: string) {
    switch (name) {
      case 'Calories':
        return 'kcal';
      case 'Fat':
        return 'Fat';
      case 'Carbohydrates':
        return 'Carbs';
      case 'Protein':
        return 'Protein';
      default:
        return name;
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', mb: 1 }}>
      <Typography variant="body1_Bold" color={'grey.dark'}>
        {title}
      </Typography>
      {filteredNutrients.map(({ name, amount, unit }) => (
        <Box
          key={name}
          sx={{
            display: 'flex',
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
            {amount} {name === 'Calories' ? '' : unit}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Nutrients;
