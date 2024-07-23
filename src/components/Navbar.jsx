import React from 'react';
import { Container, Stack, Select } from '@mantine/core';
import classes from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <Container className={classes.navbar}>
          <Stack  position="center" spacing="sm" direction="column">
            <Link to="#" className={classes.navLink}>Home</Link>
            <Link to="#featured" className={classes.navLink}>Featured</Link>
            <Link to="/#about" className={classes.navLink}>About Us</Link>
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