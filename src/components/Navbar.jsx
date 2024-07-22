import React from 'react';
import { Container, Stack } from '@mantine/core';
import classes from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <Container className={classes.navbar}>
          <Stack  position="center" spacing="sm" direction="column">
            <Link to="#" className={classes.navLink}>Home</Link>
            <Link to="#featured" className={classes.navLink}>Featured</Link>
            <Link to="/#about" className={classes.navLink}>About Us</Link>
          </Stack >
      </Container>
  );
};

export default Navbar;