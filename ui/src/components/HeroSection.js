import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Navigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/login")
  }
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{ textAlign: "center", py: 5 }}
    >
      <Typography variant="h2" fontWeight="bold">
        AI-Powered Resume Matcher
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, color: "gray" }}>
        Find the best candidates in seconds with AI!
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleClick}>

        Try Now
      </Button>
    </Box>
  );
};

export default HeroSection;
