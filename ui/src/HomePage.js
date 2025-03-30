import React from "react";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";

const HomePage = ({ onLoginClick }) => {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            AI Resume Matcher
          </Typography>
          <Button color="inherit" onClick={onLoginClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Homepage Content */}
      <Container style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h3">Welcome to AI Resume Matcher</Typography>
        <Typography variant="h6" color="textSecondary" style={{ marginTop: "10px" }}>
          Upload resumes and find the best candidate effortlessly.
        </Typography>
      </Container>
    </>
  );
};

export default HomePage;
