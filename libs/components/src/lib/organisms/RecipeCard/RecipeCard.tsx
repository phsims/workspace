import Image from 'next/image';
import DOMPurify from "isomorphic-dompurify";
import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';


export interface RecipeCardProps {
  id: number;
  image: string;
  title: string;
  summary: string;
}

export function RecipeCard({ image, title, summary }: RecipeCardProps) {

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
          dangerouslySetInnerHTML={{ __html:  content }}
        />
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default RecipeCard;
