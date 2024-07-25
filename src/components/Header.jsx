// Navigation bar with a logo and menu items
import React from 'react';
import { Image, Box, Title, Text, Button } from '@mantine/core';
import classes from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import cart from "../assets/images/cartIcon.png"
import LightDarkModeButton from './LightDarkModeButton';



const Header = () => {
  return (
    <Box className={classes.header}>
      <Text className={classes.logo}>Logo</Text>
      <Title order={2} className={classes.title}>Our Store Name</Title>
      <LightDarkModeButton/>
      {/*
      <Link to="/cart">
        <img
            className="cart"
            src={'cart}
            alt="cart icon"
        />
     </Link> */}
     <Link to="/cart" > {/* Set the desired path here */}
      <Button
        variant="outline"
        color="teal"
        size="xl"
        radius="md"
        
      >
        <Image
          src={cart} // Set the path to your image here
          alt="Shop Now"
          width={24} // Set the width of the image
          height={24} // Set the height of the image
          
        />
        Cart
      </Button>
    </Link>
     
    </Box>
  );
};
export default Header;