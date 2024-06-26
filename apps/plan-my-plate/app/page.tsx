'use client';

import { Container, Grid, Typography } from '@mui/material';
import { Banner, HeaderBanner, HeaderBannerProps } from '@workspace/components';
import { FeatureCard, FeatureCardProps } from '@workspace/components';

import { features } from './data/features';

const headerBannerContent: HeaderBannerProps = {
  h1_Headline: true,
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
      <Banner background="white">
        <Container>
          <Typography variant="h3" align="center">
            FEATURES
          </Typography>
          <Typography variant="subtitle1" align="center">
            Simplify Meal Planning and Grocery Shopping
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {features.map((feature: FeatureCardProps, index: number) => (
              <Grid
                item
                key={index}
                lg={3}
                sm={6}
                xs={12}
                sx={{
                  display: 'flex',
                  marginTop: '2rem',
                  alignItems: 'stretch',
                }}
              >
                <FeatureCard {...feature} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Banner>
    </>
  );
}
