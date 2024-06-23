import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SignOut from './SignOut';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Erron's Chat App
        </Typography>
        <SignOut />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
