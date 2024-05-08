import { Box, Container, Grid } from '@mui/material';
import { ReactNode } from 'react';

export interface BannerProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  background?: string;
}

export function Banner({
  leftContent,
  rightContent,
  background = 'primary.light',
}: BannerProps) {
  return (
    <Box sx={{ bgcolor: background, padding: { xs: 4, md: 8 } }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2 }}
          sx={{ alignItems: 'center' }}
        >
          <Grid item md={2} xs={1}>
            {leftContent}
          </Grid>
          <Grid item md={2} xs={1}>
            {rightContent}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Banner;
