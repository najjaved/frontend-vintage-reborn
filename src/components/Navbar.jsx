import React, { useState } from 'react';
import { useContext } from 'react'
import { Container, Stack, Select, Button, Text } from '@mantine/core';
import classes from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import LightDarkModeButton from './LightDarkModeButton';

const Navbar = () => {
  //const [user, setUser] = useState({}) //toDo:put in context
 
 

  return (
      <Container className={classes.navbar}>
          <Stack  position="center" spacing="sm" direction="column">
            <Link to="/" className={classes.navLink}>Home</Link>
            <Link to="#featured" className={classes.navLink}>Featured</Link>
            <Link to="/about" className={classes.navLink}>About</Link>
            <LightDarkModeButton/>

        
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