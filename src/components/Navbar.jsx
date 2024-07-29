import React, { useState } from 'react';
import { useContext } from 'react'
import { Container, Stack, Select, Button, Text, Divider, Anchor } from '@mantine/core';
import classes from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { Avatar } from '@mantine/core';

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

  return (
      <Container className={classes.navbar}>
          <Stack  position="center" spacing="sm" direction="column">
            <Anchor href ="/" underline="hover" >Home</Anchor> {/*toDo: chane other Link components to Anchor from Mantine*/}
            <Link to="#featured" className={classes.navLink}>Featured</Link>
            <Link to="/about" className={classes.navLink}>About</Link>

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
           
           
          </Stack >
      </Container>
  );
};

export default Navbar;