'use client';
import { usePathname } from 'next/navigation';
import router from 'next/router';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  ListItemButton,
  MenuList,
  Container,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';

interface NavProps {
  href: string;
  label: string;
}

export interface HeaderProps {
  headerNav: NavProps[];
  title: string;
  titleColor?: string;
}

export function Header({
  headerNav,
  title,
  titleColor = 'primary',
}: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ padding: 0, flexGrow: 1 }}
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
            <Typography
              variant="h2"
              component="div"
              sx={{ flexGrow: 1, color: titleColor, fontSize: '2rem' }}
            >
              {title}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      {headerNav && (
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <MenuList dense sx={{ width: 320 }}>
            {headerNav.map(({ href, label }) => (
              <ListItemButton key={label} onClick={() => router.push(href)}>
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
