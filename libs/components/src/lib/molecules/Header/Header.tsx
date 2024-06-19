'use client';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  ListItemButton,
  MenuList,
  Container,
  Button,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

interface NavProps {
  href: string;
  label: string;
  icon?: ReactNode;
}

export interface HeaderProps {
  logo?: ReactNode;
  headerNav: NavProps[];
  title: string;
  titleColor?: string;
  auth?: ReactNode;
}

export function Header({
  headerNav,
  title,
  titleColor = 'primary',
  logo = null,
  auth = null,
}: HeaderProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleNavClick = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ p: ' 1rem 0', flexGrow: 1 }}
      >
        <Container>
          <Toolbar>
            {headerNav && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuRoundedIcon sx={{ height: '28px', width: '28px' }} />
              </IconButton>
            )}

            <Button
              onClick={() => {
                router.push('/');
              }}
              sx={{
                p: 0,
                ':hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              {logo && <Box sx={{ mr: 2 }}>{logo}</Box>}

              <Typography
                variant="h2"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: titleColor,
                  textTransform: 'capitalize',
                }}
              >
                {title}
              </Typography>
            </Button>
            {auth}
          </Toolbar>
        </Container>
      </AppBar>
      {headerNav && (
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <MenuList dense sx={{ width: 320, p: 4 }}>
            {headerNav.map(({ href, label, icon }) => (
              <ListItemButton
                key={label}
                onClick={() => {
                  handleNavClick(href);
                }}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {icon && <Box sx={{ mr: 2 }}>{icon}</Box>}
                {label}
              </ListItemButton>
            ))}
          </MenuList>
        </Drawer>
      )}
    </>
  );
}

export default Header;
