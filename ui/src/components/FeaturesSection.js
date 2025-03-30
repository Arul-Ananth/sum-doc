import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle } from "@mui/icons-material";

const features = [
  { title: "AI-Powered Matching", description: "Find the most suitable candidate instantly with AI-driven resume analysis." },
  { title: "Fast & Accurate", description: "Get precise candidate recommendations based on job requirements in seconds." },
  { title: "Secure File Upload", description: "Upload resumes safely with encrypted storage and processing." },
  { title: "Interactive Dashboard", description: "Easily manage job applications and candidate shortlisting in one place." },
];

const FeaturesSection = () => {
  return (
    <Box textAlign="center" py={5} sx={{ background: "#f5f5f5" }}>
      <Typography variant="h4" fontWeight="bold" mb={3} component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Why Choose Our AI Resume Matcher?
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card sx={{ minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2 }}>
                <CheckCircle color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{feature.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
