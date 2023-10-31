import React from 'react';
import { Box } from '@mui/material';
import { Typography, TextField, Button, } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
  <>
      <div>
        <form>
          <Box 
          display="flex" 
          flexDirection={"column"} 
          maxWidth={400} 
          alignItems="center" 
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{":hover":{
            boxShadow: "10px 10px 20px #ccc",
          },
        }} 
          >
             <Typography variant="h3" padding={3} textAlign="center" style={{color: "Green" }} >Signup</Typography>
             <TextField margin="normal" type={"text"} variant='outlined' placeholder='Name'/>
             <TextField margin="normal" type={"email"} variant='outlined' placeholder='Email' />
             <TextField margin="normal" type={"password"} variant='outlined' placeholder='Password' />
              <Button 
              sx={{ marginTop: 3, borderRadius: 3, backgroundColor: 'darkgreen', maxWidth: "90px" }} 
              variant="contained" 
              >
                Signup
              </Button>
              <Button 
              sx={{ marginTop: 3, borderRadius: 3 }} >
              <Link style={{textDecoration: "none", color: "darkgreen"}} to="/Login">Do you have an account? Login</Link>
              </Button>
          </Box>
        </form>
      </div>
    </> 
  );
}

export default Signup
