// Navigation bar with a logo and menu items
import React from 'react';
import { Image, Box, Title, Text, Button } from '@mantine/core';
import classes from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import cart from "../assets/images/cartIcon.png"
import LightDarkModeButton from './LightDarkModeButton';
import profileIcon from "../assets/images/profileIcon_placeholder.png"



const Header = () => {
  return (
    <Box className={classes.header}>
      <Link to="/">
        <Text className={classes.logo}><img src='src/assets/images/Reborn.png' /></Text>
      </Link>
      <Link to="/profile/userId">
        <Image
          src={profileIcon}
          alt='profileIcon'
          width={24}
          height={24}
        />
      </Link>
      <LightDarkModeButton />
      <Link to="/profile/cart" >
        <Image
          src={cart}
          alt="Shopping cart"
          width={24}
          height={24}
        />
      </Link>

    </Box>
  );
};
export default Header;