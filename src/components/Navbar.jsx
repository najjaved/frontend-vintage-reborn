import React, { useState, useEffect } from 'react';
import { useContext } from 'react'
import { Container, Stack, Select, Button, Text, Divider, Anchor } from '@mantine/core';
import classes from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { Avatar } from '@mantine/core';
import LightDarkModeButton from './LightDarkModeButton';
//import SearchBar from './SearchBar'; // Import the SearchBar component
//import searchIcon from '../assets/images/search.png'; // Import the search icon

const Navbar = () => {
  //const [user, setUser] = useState({}) //toDo:put in context
  const { isAuthenticated, handleLogout, user } = useContext(SessionContext)

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenModal = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseModal = () => {
    setIsSignUpOpen(false);
  };

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  //toDo: this function already exists, move to helper functions/context and get from there
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
          <Stack  position="center" spacing="sm" direction="column">
            <Anchor href ="/" underline="hover" >Home</Anchor> {/*toDo: chane other Link components to Anchor from Mantine*/}
            <Link to="#featured" className={classes.navLink}>Featured</Link>
            <Link to="/about" className={classes.navLink}>About</Link>
            <Container className={classes.centeredItem}>
              <LightDarkModeButton/>
            </Container>

            {!isAuthenticated && (
              <>        
                <Button onClick={handleOpenModal}>Signup Test</Button>
                <Button onClick={handleOpenLogin}>Login Test</Button>              
              </>
            )}
            {isSignUpOpen && <SignupForm isOpen={isSignUpOpen} onClose={handleCloseModal} />}
            {isLoginOpen && <LoginForm isOpen={isLoginOpen} onClose={handleCloseLogin} />} {/* <Avatar src="avatar.png" alt="no image here" color="cyan" radius="xl /> */}
            <Divider/>
            <Text>to Header:</Text>
            {/*{isAuthenticated && (<Link to={`/profile/${user._id}`} className={classes.navLink}>Profile Page</Link>)}
            & await fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`)*/}
            {isAuthenticated && (
              <>
                {/* toDo: fix backend, fetch userId from token payload {`/profile/${user._id}`}*/}    
                <Link to= "/profile/userId" className={classes.navLink}> Profile Page</Link> 
                <Link to= "/profile/orders" className={classes.navLink}> View Orders </Link>   
                <Button type='button' onClick={handleLogout}> Logout </Button>
              </>
            )}

            {/* 
            <Select id="#theme"
              label="Chose color scheme"
              placeholder="Pick value"
              data={['light', 'dark']}
            /> */}
        {/*<SearchBar products={products} icon={searchIcon} />  Add the SearchBar component */}
           
           
          </Stack >
      </Container>
  );
};

export default Navbar;