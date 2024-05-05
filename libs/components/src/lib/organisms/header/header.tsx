import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { MenuIcon } from '@storybook/icons';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color='transparent' sx={{boxShadow:'none'}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h2" fontWeight='bold' component="div" sx={{ flexGrow: 1 }} >
            PlanMyPlate
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
