import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let nav=useNavigate();
  const handleLogin = () => {
    if (username === 'kmr' && password === 'kmr') {
    nav('/adminpanel')
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='login' style={{textAlign:"center"}} >
      <h2>Admin Login</h2>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },textAlign:'center',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" value={username} 
      onChange={(e) => setUsername(e.target.value)}  variant="outlined" /><br/>
      <TextField id="outlined-basic" label="Password" type="password"
      autoComplete="current-password" value={password} 
      onChange={(e) => setPassword(e.target.value)} variant="outlined" /><br/>
      <Button variant='contained' onClick={handleLogin}>Login</Button>
    </Box>
    </div>
  );
};

export default AdminLogin;
