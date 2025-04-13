import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Upload from "./components/Upload";
import WhyChooseUs from "./components/WhyChooseUs";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const App = () => {
  return (
    <Container maxWidth="lg">
      <ResponsiveAppBar/>
      <HeroSection />
      <FeaturesSection />
      {/*<Upload />*/}
      <WhyChooseUs />
    </Container>
  );
};

export default App;
