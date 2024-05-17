import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Box,
  Button,
  Card,
  Typography,
  CardContent,
  CardActions,
} from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function FeatureCard({
  title,
  description,
  image,
  link,
}: FeatureCardProps) {
  const router = useRouter();
  return (
    <Card
      elevation={1}
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
       
        overflow: 'visible',
        mt: 8,
        mb: 8,
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', width: '100%', height: '270px' ,top:'-90px'}}>
        <Image
          src={image}
          alt={title}
          sizes="270px"
          fill
          style={{
            objectFit: 'cover',

          }}
        />
      </Box>

      {/* <Box
        component="img"
        src={image}
        alt={title}
        sx={{ width: '100%', height: 'auto', mt: '-35%', mb: '-40%' }}
      /> */}
      <CardContent sx={{mt:'70px'}}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 0 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto', justifyContent: 'center' }}>
        <Button
          variant="text"
          onClick={() => router.push(link)}
          sx={{ fontSize: 'large', textTransform: 'none' }}
          endIcon={<ArrowForwardIosRoundedIcon fontSize="small" />}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}

export default FeatureCard;
