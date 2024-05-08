import { Container, Typography } from '@mui/material';
import { Header, Banner } from '@workspace/components';
import Image from 'next/image';

export default function Index() {
  const BannerLeft = () => {
    return (
      <>
        <Typography variant="h1" mb={5}>
          From Pantry to Plate, Perfectly Planned
        </Typography>
        <Typography variant="body1">
          Are you tired of the daily mealtime chaos, juggling between
          last-minute recipe searches and grocery store rushes?
        </Typography>

        <Typography variant="body1">
          PlanMyPlate is here to simplify your life and make meal planning a
          breeze. Whether you&apos;re a seasoned chef or a kitchen newbie, our app is
          your key to stress-free meal planning and efficient grocery shopping.
        </Typography>
      </>
    );
  };
  const BannerRight = () => {
    return (
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
    );
  };
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Banner
        leftContent={<BannerLeft />}
        rightContent={<BannerRight />}
        background="grey.light"
      />
    </>
  );
}
