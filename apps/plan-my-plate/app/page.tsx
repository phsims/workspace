'use client';

import { Grid, Typography } from '@mui/material';
import { Banner, HeaderBanner, HeaderBannerProps } from '@workspace/components';
import { FeatureCard, FeatureCardProps } from '@workspace/components';

import { features } from './__fixtures__/features';

const headerBannerContent: HeaderBannerProps = {
  background: 'grey.light',
  gridSplit: [6, 6],
  title: 'From Pantry to Plate, Perfectly Planned',
  intro:
    "Are you tired of the daily mealtime chaos, juggling between last-minute recipe searches and grocery store rushes? PlanMyPlate is here to simplify your life and make meal planning a breeze. Whether you're a seasoned chef or a kitchen newbie, our app is your key to stress-free meal planning and efficient grocery shopping.",
  image: {
    src: '/banner-image.webp',
    height: 609,
    width: 657,
    alt: 'From Pantry to Plate, Perfectly Planned',
  },
};
export default function Index() {
  return (
    <>
      <HeaderBanner {...headerBannerContent} />
      <Banner background="grey.light">
        <Typography variant="h3" align="center">
          FEATURES
        </Typography>
        <Typography variant="subtitle1" align="center">
          Simplify Meal Planning and Grocery Shopping
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 4 }}
          sx={{ alignItems: 'stretch' }}
        >
          {features.map((feature: FeatureCardProps, index: number) => (
            <Grid
              item
              md={4}
              xs={1}
              key={index}
              sx={{ display: 'flex', marginTop: '3rem' }}
            >
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Banner>
    </>
  );
}
