import React from 'react';
import { Anchor, Container, Text} from '@mantine/core';
import styles from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Text align="center">© 2024  Our Store. All rights reserved.</Text>
        <Text align="center">
        <Anchor href="#contact" className={styles.footerLink}>Contact Us</Anchor>
        </Text>
      </Container>
    </div>
  );
};

export default Footer;