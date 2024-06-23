import React from "react";
import { Button } from "@mui/material";
import { auth } from "../firebaseConfig";

const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    auth.currentUser && (
      <Button variant="contained" color="primary" onClick={handleSignOut}>
        Sign Out
      </Button>
    )
  );
};

export default SignOut;
