import React from 'react';
import { Container, Text } from '@mantine/core';
import classes from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <Text align="center">© 2024  Reborn. All rights reserved.</Text>
        <Text align="center">
          <Link to="/contact" className={classes.footerLink}>Contact Us</Link>
        </Text>
      </Container>
    </div>
  );
};

export default Footer;