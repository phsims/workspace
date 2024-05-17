import { useRouter } from 'next/navigation'
import { Box, Button, Paper, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


export interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  link:string;
}

export function FeatureCard({ title, description, image,link }: FeatureCardProps) {
  const router = useRouter()
  return (
    <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{ width: '100%', height: 'auto', mt:'-40%',mb:'-30%'}}
      />
      <Typography variant="h5" sx={{ mb: 2,fontWeight:600, }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{mb:2}}>{description}</Typography>
      <Button variant='text'  onClick={() => router.push(link)} sx={{fontSize:'large', textTransform:'none'}} endIcon={<ArrowForwardIosRoundedIcon fontSize="small"/>}>Learn more</Button>
    </Paper>
  );
}

export default FeatureCard;
