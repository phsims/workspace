'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
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
        mt: 6,
        position: 'relative',
      }}
    >
      <Image
        src={image}
        alt={title}
        height={256}
        width={256}
        style={{ margin: '-90px auto  -90px ' }}
      />
      <CardContent>
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
