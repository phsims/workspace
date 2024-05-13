import { Box, Container, Grid } from '@mui/material';
import { ReactNode } from 'react';

export interface BannerProps {
  children: ReactNode;
  background?: string;
}

export function Banner({
  children,
  background = 'primary.light',
}: BannerProps) {
  return (
    <Box sx={{ bgcolor: background, padding: { xs: 4, md: 8 } }}>
      <Container>{children}</Container>
    </Box>
  );
}

export default Banner;
