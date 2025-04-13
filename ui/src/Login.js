import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";  // For navigation
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Login successful!");
        // Redirect to dashboard or homepage after login
        navigate("/dashboard")
      } else {
        setMessage(data.detail || "Login failed!");
      }
    } catch (error) {
      setMessage("Error logging in. Please try again.");
    }
  };

  return (
    <>
    <ResponsiveAppBar/>
    <Container maxWidth="xs">
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" align="center">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
        
        {/* Sign Up Button */}
        <Typography align="center" sx={{ mt: 2 }}>
          Don't have an account?
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={() => navigate("/signup")} // Redirects to Signup Page
          sx={{ mt: 1 }}
        >
          Sign Up
        </Button>

        {message && <Typography color="error" align="center" sx={{ mt: 2 }}>{message}</Typography>}
      </Box>
    </Container>
    </>
  );
};

export default Login;
