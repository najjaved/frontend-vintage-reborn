import React from 'react';
import { Container, Button, Text, useMantineTheme } from '@mantine/core';
import styles from '../styles/MainContent.module.css';

const MainContent = () => {
  const theme = useMantineTheme();
  const secondaryColor =
      theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Container className={styles.container} style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
      <Text size="xl" weight={700} className={styles.title} style={{ color: secondaryColor, lineHeight: 1.5 }}>
        Welcome to Our Store
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