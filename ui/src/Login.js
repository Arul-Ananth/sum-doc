import React, { useState } from "react";
import "./Login.css"

import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Global } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const LoginBox = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  maxWidth: "400px",
  margin: "auto",
  textAlign: "center",
  marginTop: "5rem",
}));  



const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { username, password };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
    
      if (response.ok) {
        alert(data)
        //onLogin(data); 
        navigate("/dashboard");
        // Pass user data to parent
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div >
    <Container >
      <h1 style={{textAlign:"center"}}>
        Document Summariser
      </h1>
      <LoginBox elevation={3}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </form>
      </LoginBox>
    </Container>
    </div>
  );
};

export default Login;
