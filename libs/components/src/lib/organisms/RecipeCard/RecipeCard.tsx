import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';


export interface RecipeCardProps {
  id: number;
  image: string;
  title: string;
  summary: string;
}

export function RecipeCard({ image, title, summary }: RecipeCardProps) {
  const content = `${summary.substring(0, 70)}...`;

  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        > <div dangerouslySetInnerHTML={{ __html: content }} /></Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default RecipeCard;
