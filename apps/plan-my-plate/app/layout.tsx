import { Suspense } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import CssBaseline from '@mui/material/CssBaseline';
import { CustomThemeProvider, Header } from '@workspace/components';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import Loading from './loading';


export const metadata = {
  title: 'Welcome to plan-my-plate',
  description: 'Panl your meals with ease.',
};

const navItems = [
  { label: 'Recipes', href: '/recipes', icon: <DescriptionRoundedIcon /> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CustomThemeProvider theme="pink">
            <CssBaseline />
            <Header
              titleColor="grey"
              headerNav={navItems}
              title={'Plan My Plate'}
              logo={
                <LocalDiningRoundedIcon
                  color="primary"
                  sx={{ fontSize: '4rem' }}
                />
              }
            />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
