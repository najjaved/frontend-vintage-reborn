// Navigation bar with a logo and menu items
import React from 'react';
import { Box, Title, Text, Button } from '@mantine/core';
import classes from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import cart from "../assets/images/cartIcon.png"
import LightDarkModeButton from './LightDarkModeButton';

const Header = () => {
  return (
    <Box className={classes.header}>
      <Text className={classes.logo}><img src='./src/assets/images/Reborn.png' alt='Reborn Logo' /></Text>
      <Title order={2} className={classes.title}>Home</Title>
      <LightDarkModeButton />
      {/*
      <Link to="/cart">
        <img
            className="cart"
            src={'cart}
            alt="cart icon"
        />
     </Link> */}
      <Button className={classes.signupButton}>Signup</Button>
      <Button className={classes.cartButton}>Cart</Button>

    </Box>
  );
};
export default Header;