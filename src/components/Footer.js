import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#1976d2',
        color: 'white',
        textAlign: 'center',
        py: 2
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Erron's Chat App
      </Typography>
    </Box>
  );
};

export default Footer;
