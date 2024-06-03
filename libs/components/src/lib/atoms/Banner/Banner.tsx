import { Box } from '@mui/material';
import { ReactNode } from 'react';

export interface BannerProps {
  children: ReactNode;
  background?: string;
  size?: 'small' | 'large';
}

export function Banner({
  children,
  background = 'white',
  size = 'large',
}: BannerProps) {
let  padding;

  switch (size) {
    case 'small':
      padding = { xs: 2, md: 4 };
      break;
    case 'large':
      padding = { xs: 4, md: 8 };
      break;
    default:
      padding = { xs: 4, md: 8 };
  }

  return (
    <Box sx={{ bgcolor: background, padding }}>
     {children}
    </Box>
  );
}

export default Banner;
