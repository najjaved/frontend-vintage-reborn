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
      <Link to="/cart" >
        <Button> CartButton</Button>  
      </Link>
     <Link to="/cart" >
        <Image
          src={cart} 
          alt="Shopping cart"
          width={24} 
          height={24}        
        />
    </Link>
     

      <Button className={classes.cartButton}>Cart</Button>

    </Box>
  );
};
export default Header;