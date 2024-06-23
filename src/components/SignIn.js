import React from 'react';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<GoogleIcon />}
      onClick={signInWithGoogle}
      sx={{ mt: 3 }}
    >
      Sign in with Google
    </Button>
  );
};

export default SignIn;
