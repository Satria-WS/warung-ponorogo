import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import backgroundImage from "../../assets/home/image-1.png";

const Home = () => {
  return (
    <>
      <Box sx={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        height: "750px",
        backgroundSize: "contain",
        
        
      }}>
        <Container>
        Home
        </Container>

    </Box>
    
    </>
  )
}
export default Home