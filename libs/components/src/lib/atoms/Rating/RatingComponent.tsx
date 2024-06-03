
"use client";
import {Rating} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';

export interface RatingProps {
  itemRating: number|null;
}

export function RatingComponent({ itemRating }: RatingProps) {
  const [rating, setRating] = useState<number|null>(itemRating);
  
  return (
    <Rating
      color="warning.main"
      name="rating"
      defaultValue={2}
      precision={0.5}
      icon={<StarIcon fontSize="inherit" />}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
      size="large"
      value={rating}
      onChange={(_event, newValue) => {
        setRating(newValue);
      }}
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
