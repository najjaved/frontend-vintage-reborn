import React, { useState, useEffect, useContext } from 'react';
import { Container, Stack } from '@mantine/core';
import classes from '../styles/Navbar.module.css';
import LightDarkModeButton from './LightDarkModeButton';
import SearchBar from './SearchBar';
import searchIcon from '../assets/images/search.png';
//import { IconSearch } from '@tabler/icons-react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { products } = useContext(CartContext);

  return (

    <Container className={classes.navbar}>
      <Stack position="center" spacing="sm" direction="column">
        <Link to="/" className={classes.navLink}>Home</Link>
        <Link to="#featured" className={classes.navLink}>Featured</Link>
        <Link to="/admin" className={classes.navLink}> Admin Dashboard</Link>
        <Container className={classes.centeredItem}>
          Change Theme <LightDarkModeButton />
        </Container>
        <Link to="/about" className={classes.navLink}>About</Link>
        <SearchBar products={products} icon={searchIcon} /> {/* Add the SearchBar component */}
      </Stack>
    </Container>

  );
};

export default Navbar;
