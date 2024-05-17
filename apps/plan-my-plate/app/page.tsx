'use client';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import {  Banner, ButtonLink } from '@workspace/components';

export default function Index() {
  return (
    <>
      <Banner background="grey.light">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2 }}
          sx={{ alignItems: 'center' }}
        >
          <Grid item md={2} xs={1}>
            <Typography variant="h1" mb={5}>
              From Pantry to Plate, Perfectly Planned
            </Typography>
            <Typography variant="body1">
              Are you tired of the daily mealtime chaos, juggling between
              last-minute recipe searches and grocery store rushes?
            </Typography>

            <Typography variant="body1">
              PlanMyPlate is here to simplify your life and make meal planning a
              breeze. Whether you&apos;re a seasoned chef or a kitchen newbie,
              our app is your key to stress-free meal planning and efficient
              grocery shopping.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                width: '100%',
                mt: 5,
              }}
            >
              <ButtonLink
                variant="contained"
                color="primary"
                text="Lets Cook"
                link="#cook"
                size="large"
              />
              <ButtonLink
                variant="outlined"
                color="primary"
                text="Explore Now"
                link="#fatures"
                size="large"
              />
            </Box>
          </Grid>
          <Grid item md={2} xs={1}>
            <Image
              width={657}
              height={609}
              src="/banner-image.webp"
              alt="make meal planning a breeze"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Grid>
        </Grid>
      </Banner>
    </>
  );
}
