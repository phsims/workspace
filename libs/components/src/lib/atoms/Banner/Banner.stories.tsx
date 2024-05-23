import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button, Grid, Typography } from '@mui/material';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: '@organisms/Banner',
};
export default meta;
type Story = StoryObj<typeof Banner>;

export const Primary = {
  args: {
    background: 'grey.light',
    children: (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2 }}
        sx={{ alignItems: 'center' }}
      >
        <Grid item md={2} xs={1}>
          <Image
            alt="pic name"
            width={657}
            height={609}
            style={{
              width: '100%',
              height: 'auto',
            }}
            src="/banner-image.webp"
          />
        </Grid>
        <Grid item md={2} xs={1}>
          <Typography variant="h1" sx={{ mb: 5 }}>
            This is my title
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mattis luctus quam, a luctus diam. Duis ut tellus ultricies,
            consequat lorem eu, luctus eros. Donec iaculis lobortis nulla, eu
            scelerisque nunc consectetur et. Nam non ultrices odio, lobortis
            lacinia urna
          </Typography>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </Grid>
      </Grid>
    ),
  },
};

export const Heading: Story = {
  args: { ...Primary.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Banner!/gi)).toBeInTheDocument();
  },
};
