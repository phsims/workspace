import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { CustomThemeProvider, Header } from '@workspace/components';

export const metadata = {
  title: 'Welcome to plan-my-plate',
  description: 'Generated by create-nx-workspace',
};

const navItems = [{ label: 'Recipes', href: '/recipes' }];

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
              headerNav={navItems}
              title={'Plan My Plate'}
              titleColor="primary.main"
            />
            {children}
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
