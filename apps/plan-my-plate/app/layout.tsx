import { Suspense } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { auth } from './auth';

import { useSession, SessionProvider } from 'next-auth/react';

import CssBaseline from '@mui/material/CssBaseline';
import {
  CustomThemeProvider,
  Header,
  Button,
  LocalDiningRoundedIcon,
  DescriptionRoundedIcon,
  Box,
} from '@workspace/components';

import Loading from './loading';
import AuthComponent from './components/AuthComponent/AuthComponent';
import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';

export const metadata = {
  title: 'Welcome to plan-my-plate',
  description: 'Panl your meals with ease.',
};

const navItems = [
  { label: 'Recipes', href: '/recipes', icon: <DescriptionRoundedIcon /> },
];

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CustomThemeProvider theme="pink">
            <CssBaseline />
            <SessionProvider>
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
                auth={
                  <>
                    {session && <SignOut />}
                    {!session && <SignIn />}
                  </>
                }
              ></Header>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </SessionProvider>
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
