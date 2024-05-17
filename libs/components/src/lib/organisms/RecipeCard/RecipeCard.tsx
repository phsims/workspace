import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Card, CardContent, Typography, Box, CardActions } from '@mui/material';
import ButtonLink from '../../atoms/ButtonLink/ButtonLink';

export interface RecipeCardProps {
  id: number;
  image: string;
  title: string;
  summary: string;
  link:string;
}

export function RecipeCard({ image, title, summary ,link}: RecipeCardProps) {
  const content = DOMPurify.sanitize(`${summary.substring(0, 70)}...`);
  return (
    <Card>
      <Box sx={{ position: 'relative', width: '100%', height: '140px' }}>
        <Image
          src={image}
          alt={title}
          sizes="300px"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CardContent>
      <CardActions>
        <ButtonLink text='Go to recipe' link={link} variant='text'size='small' endIcon={<ArrowForwardIosRoundedIcon/>} />
      </CardActions>
    </Card>
  );
}

export default RecipeCard;
