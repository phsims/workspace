import {Rating} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export interface RatingProps {
  itemRating: number;
}

export function RatingComponent({ itemRating }: RatingProps) {
  return (
    <Rating
      color="warning.main"
      name="rating"
      defaultValue={2}
      precision={0.5}
      icon={<StarIcon fontSize="inherit" />}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
      size="large"
      value={itemRating}
      sx={{
        '& .MuiRating-iconFilled': {
          color: 'primary.main',
        },
        '& .MuiRating-iconHover': {
          color: 'primary.main',
        },
      }}
    />
  );
}

export default RatingComponent;
