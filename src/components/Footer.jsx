import React from 'react';
import { Container, Group, Text } from '@mantine/core';
import classes from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <Text align="center">© 2024  Reborn. All rights reserved.</Text>
        <Group justify="center">
          <Link to="/contact" className={classes.footerLink}>Contact Us</Link>
          <Link to="/aboutUs" className={classes.footerLink}>Our Team</Link>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;