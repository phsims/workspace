import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Card, CardContent, Typography, Box, CardActions } from '@mui/material';
import ButtonLink from '../../atoms/ButtonLink/ButtonLink';

//imort image placeholder

export interface RecipeCardProps {
  id: number;
  image: string;
  title: string;
  summary: string;
}
export function RecipeCard({ image, title, summary, id }: RecipeCardProps) {
  const shortSummery = DOMPurify.sanitize(`${summary.substring(0, 70)}...`);

  return (
    <Card
      sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      data-testid={id}
    >
      <Box sx={{ position: 'relative', width: '100%', height: '140px' }}>
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0t3fxBwACmgETyBRW3gAAAABJRU5ErkJggg=="
          src={image}
          alt={title}
          sizes="400px"
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
          dangerouslySetInnerHTML={{ __html: shortSummery }}
        />
      </CardContent>

      <CardActions sx={{ mt: 'auto' }}>
        <ButtonLink
          text="Go to recipe"
          link={`recipes/${id}`}
          variant="text"
          size="small"
          endIcon={<ArrowForwardIosRoundedIcon />}
        />
      </CardActions>
    </Card>
  );
}

export default RecipeCard;
