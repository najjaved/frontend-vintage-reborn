import React, { useState } from 'react';
import { useContext } from 'react'
import { Container, Stack, Select, Button, Text } from '@mantine/core';
import classes from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext'
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

const Navbar = () => {
  //const [user, setUser] = useState({}) //toDo:put in context
  const { isAuthenticated, handleLogout } = useContext(SessionContext)

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
            <Link to="/" className={classes.navLink}>Home</Link>
            <Link to="#featured" className={classes.navLink}>Featured</Link>
            <Link to="/#about" className={classes.navLink}>About</Link>

            {!isAuthenticated && (
              <>        
                <Button onClick={handleOpenModal}>Signup Test</Button>
                <Button onClick={handleOpenLogin}>Login Test</Button>              
              </>
            )}
            {isSignUpOpen && <SignupPage isOpen={isSignUpOpen} onClose={handleCloseModal} />}
            {isLoginOpen && <LoginPage isOpen={isLoginOpen} onClose={handleCloseLogin} />}

            {/*{isAuthenticated && (<Link to={`/profile/${user._id}`} className={classes.navLink}>Profile Page</Link>)}
            & await fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`)*/}
            {isAuthenticated && (
              <>        
                {/*<Button component= {Link} to='/products/new'> Add a new product</Button>*/}
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