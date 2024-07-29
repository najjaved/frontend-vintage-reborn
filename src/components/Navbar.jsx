import React, { useState, useEffect, useContext } from 'react';
import { Container, Stack } from '@mantine/core';
import classes from '../styles/Navbar.module.css';
import LightDarkModeButton from './LightDarkModeButton';
import SearchBar from './SearchBar'; 
import searchIcon from '../assets/images/search.png';
import { SessionContext } from '../contexts/SessionContext';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { isAuthenticated, user } = useContext(SessionContext);
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
        <Container className={classes.centeredItem}>
          <LightDarkModeButton />
        </Container>
        {isAuthenticated && (
              <>
                {/* toDo: fix backend, fetch userId from token payload {`/profile/${user._id}`}*/}    
                <Link to= "/profile/userId" className={classes.navLink}> Profile Page</Link> 
              </>
            )}

            {/* 
            <Select id="#theme"
              label="Chose color scheme"
              placeholder="Pick value"
              data={['light', 'dark']}
            /> */}
        <SearchBar products={products} icon={searchIcon} /> {/* Add the SearchBar component */}
      </Stack>
    </Container>

  );
};

export default Navbar;
