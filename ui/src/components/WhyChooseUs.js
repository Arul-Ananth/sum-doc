import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { Verified, Speed, Security, ThumbUp } from "@mui/icons-material";

const reasons = [
  { 
    title: "AI-Powered Precision", 
    description: "Our system ensures accurate candidate matching using AI-driven insights.", 
    icon: <Verified color="primary" sx={{ fontSize: 50 }} /> 
  },
  { 
    title: "Blazing Fast Performance", 
    description: "Find the best candidates within seconds with our optimized backend.", 
    icon: <Speed color="secondary" sx={{ fontSize: 50 }} /> 
  },
  { 
    title: "Secure & Reliable", 
    description: "Your data is protected with top-tier encryption and security protocols.", 
    icon: <Security color="success" sx={{ fontSize: 50 }} /> 
  },
  { 
    title: "Easy to Use", 
    description: "An intuitive dashboard that requires no technical knowledge to operate.", 
    icon: <ThumbUp color="warning" sx={{ fontSize: 50 }} /> 
  },
];

const WhyChooseUs = () => {
  return (
    <Box textAlign="center" py={5} sx={{ background: "#f5f5f5" }}>
      <Typography variant="h4" fontWeight="bold" mb={3} component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Why Choose Us?
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {reasons.map((reason, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card sx={{ minHeight: 200, display: "flex", flexDirection: "column", alignItems: "center", p: 3, textAlign: "center" }}>
                {reason.icon}
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{reason.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{reason.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
