import Image from 'next/image';
import { Container, Grid, Typography } from '@mui/material';
import Banner from '../../atoms/Banner/Banner';

export interface HeaderBannerProps {
  background: string;
  gridSplit: [3, 9] | [6, 6] | [9, 3];
  title: string;
  intro: string;
  image: {
    src: string;
    height: number;
    width: number;
    alt: string;
    imgTitle?: string;
  };
}

export function HeaderBanner({
  background,
  gridSplit = [6, 6],
  title,
  intro,
  image,
}: HeaderBannerProps) {
  const { src, height, width, alt, imgTitle = alt } = image;

  return (
    <Banner background={background}>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item md={gridSplit[0]} xs={1}>
            <Typography variant="h1" sx={{ mb: 3 }}>
              {title}
            </Typography>
            <Typography variant="body1"> {intro}</Typography>
          </Grid>
          <Grid item md={gridSplit[1]} xs={1}>
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
