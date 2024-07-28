import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Container, Stack, Button, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';
import classes from '../styles/Navbar.module.css';
import LightDarkModeButton from './LightDarkModeButton';
import SearchBar from './SearchBar'; // Import the SearchBar component
import searchIcon from '../assets/images/search.png'; // Import the search icon

const Navbar = () => {
  const { isAuthenticated } = useContext(SessionContext);
  const [products, setProducts] = useState([]);

  // Fetch products data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5006/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className={classes.navbar}>
      <Stack position="center" spacing="sm" direction="column">
        <Link to="/" className={classes.navLink}>Home</Link>
        <Link to="#featured" className={classes.navLink}>Featured</Link>
        <Link to="/about" className={classes.navLink}>About</Link>
        <LightDarkModeButton />
        <SearchBar products={products} icon={searchIcon} /> {/* Add the SearchBar component */}
      </Stack>
    </Container>
  );
};

export default Navbar;
