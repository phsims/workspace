import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import router from 'next/router';

interface NavProps {
  link: string;
  text: string;
}

/* eslint-disable-next-line */
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="transparent"
          sx={{ padding: 0}}
        >
          <Toolbar> 
            {headerNav && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuRoundedIcon sx={{ height:'28px', width:'28px' }} />
              </IconButton>
            )}
            <Typography
              variant="h2"
              component="div"
              sx={{ flexGrow: 1, color: titleColor, fontSize:'2rem' }}
            >
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {headerNav && (
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {headerNav.map(({ link, text }) => (
            <li>
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => router.push(link)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </li>
          ))}
        </Drawer>
      )}
    </>
  );
}

export default Header;
