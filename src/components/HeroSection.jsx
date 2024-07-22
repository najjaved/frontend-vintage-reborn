
import React from 'react';
import { Container, Title, Button, Text } from '@mantine/core';
import styles from '../styles/Home.module.css';


const HeroSection = () => {
    return (
          <Container className={styles.hero}>
            <Title size="xl" weight={700} className={styles.heroTitle}>
              Welcome to Our Store
            </Title>
            <Text size="md" className={styles.description}>
              Discover unique, pre-loved items and give them a second chance!
            </Text>
            <Button variant="outline" color="blue" size="md">
              Shop Now
            </Button>
          </Container>
      );
}
 
export default HeroSection;

