import React from 'react';
import { Container, Group, Text, Anchor } from '@mantine/core';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
      <Container className={styles.navbar}>
        <Group position="apart">
          <Text>Our Store</Text>
          <Group position="center" direction="column" spacing="sm">
            <Anchor href="#" className={styles.navLink}>Home</Anchor>
            <Anchor href="#featured" className={styles.navLink}>Featured</Anchor>
            <Anchor href="#contact" className={styles.navLink}>Contact</Anchor>
          </Group>
        </Group>
      </Container>
  );
};

export default Navbar;