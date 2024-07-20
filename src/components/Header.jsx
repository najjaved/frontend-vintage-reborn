import React from 'react';
import { Box, Title } from '@mantine/core';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <Box className={styles.header}>
      <Title order={2} className={styles.title}>My Store</Title>
    </Box>
  );
};
export default Header;