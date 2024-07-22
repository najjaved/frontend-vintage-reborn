// Navigation bar with a logo and menu items
import React from 'react';
import { Box, Title, Text, Button } from '@mantine/core';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box className={styles.header}>
      <Text className={styles.logo}>Logo</Text>
      <Title order={2} className={styles.title}>Our Store Name</Title>
      {/*
      <Link to="/cart">
        <img
            className="cart"
            src={''}
            alt="cart icon"
        />
     </Link> */}
     <Button className={styles.cartButton}>Cart</Button>
     
    </Box>
  );
};
export default Header;