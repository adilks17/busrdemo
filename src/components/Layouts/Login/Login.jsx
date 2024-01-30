import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Box, Avatar, Grid, useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = ({ onLoginSuccess }) => {
  const [inputs, setInputs] = useState({ "username": '', "password": '' });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery('(min-width: 600px)');

  const checkData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3005/Loginsearch", {
        username: inputs.username,
        password: inputs.password,
      });

      if (response.data.success) {
        alert('Login successful');
        onLoginSuccess();
        navigate('/Home');
      } else {
        alert('Invalid email and Password. Please try again.');
        console.log(response.data);
      }
    } catch (err) {
      alert('Error occurred during login. Please try again.');
    }
  };

  return (
    <Grid container>
      {/* Right side with login components */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={8} className="login-container">
          <Box p={4} display="flex" flexDirection="column" alignItems="center">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <TextField
              className="style2"
              required
              fullWidth
              id="outlined-required"
              label="Username"
              name="username"
              value={inputs.username}
              onChange={inputHandler}
              margin="normal"
            />
            <TextField
              fullWidth
              name="password"
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={inputs.password}
              onChange={inputHandler}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={checkData}
              fullWidth
              sx={{ mt: 3 }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Grid>

      {/* Left side with image (displayed only on larger screens) */}
      {isLargeScreen && (
        <Grid item xs={12} sm={6} style={{ height: '100vh' }}>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="primary.main"
            color="white"
          >
            {/* You can replace the image source with your own */}
            <img
              src="https://wallpapercave.com/wp/wp2508260.jpg" // Adjust the image source
              alt="Admin Panel"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
