import Image from 'next/image';
import { Container, Grid, Typography } from '@mui/material';
import Banner from '../../atoms/Banner/Banner';

export interface HeaderBannerProps {
  title: string;
  intro: string;
  image: {
    src: string;
    height: number;
    width: number;
    alt: string;
    imgTitle?: string;
  };
  h1_Headline?: boolean;
  gridSplit?: [number, number];
}

export function HeaderBanner({
  title,
  intro,
  image,
  h1_Headline = false,
  gridSplit = [6, 6],
}: HeaderBannerProps) {
  const { src, height, width, alt, imgTitle = alt } = image;

  return (
    <Banner background="grey.light">
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item md={gridSplit[0]} xs={12}>
            <Typography
              variant={h1_Headline ? 'h1_Headline' : 'h1'}
              sx={{ mb: 3 }}
            >
              {title}
            </Typography>
            <Typography variant="body1">{intro}</Typography>
          </Grid>
          <Grid item md={gridSplit[1]} xs={12}>
            <Image
              src={src}
              alt={alt}
              title={imgTitle}
              width={width}
              height={height}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Banner>
  );
}

export default HeaderBanner;
