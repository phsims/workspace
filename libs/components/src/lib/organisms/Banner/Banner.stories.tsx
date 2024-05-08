import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button, Typography } from '@mui/material';
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
    leftContent: (
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
    ),
    rightContent: (
      <>
        <Typography variant="h1" sx={{ mb: 5 }}>
          This is my title
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis
          luctus quam, a luctus diam. Duis ut tellus ultricies, consequat lorem
          eu, luctus eros. Donec iaculis lobortis nulla, eu scelerisque nunc
          consectetur et. Nam non ultrices odio, lobortis lacinia urna
        </Typography>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </>
    ),
  },
};

export const Heading: Story = {
  args: { ...Primary.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Banner!/gi)).toBeTruthy();
  },
};
