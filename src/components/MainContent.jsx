import React from 'react';
import { Container, Button, Text } from '@mantine/core';
import styles from '../styles/MainContent.module.css';

const MainContent = () => {
  return (
    <Container className={styles.container}>
      <Text size="xl" weight={700} className={styles.title}>
        Welcome to My Store
      </Text>
      <Text size="md" className={styles.description}>
        Discover unique, pre-loved items and give them a second chance!
      </Text>
      <Button variant="outline" color="blue" size="md">
        Shop Now
      </Button>
    </Container>
  );
};

export default MainContent;