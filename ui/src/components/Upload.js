import React, { useState } from "react";
import { Box, Button, Typography, Input } from "@mui/material";
import { motion } from "framer-motion";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{ textAlign: "center", py: 5 }}
    >
      <Typography variant="h4">Upload Your Resume</Typography>
      <input type="file" onChange={handleFileUpload} style={{ marginTop: 10 }} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Find Best Match
      </Button>
      {file && <Typography sx={{ mt: 2 }}>Uploaded: {file.name}</Typography>}
    </Box>
  );
};

export default Upload;
