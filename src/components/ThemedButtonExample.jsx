import React from 'react';
import { Box, Button, Text, useMantineTheme } from '@mantine/core';
import { lightTheme, darkTheme } from '../styles/theme';

const ThemedButton = () => {
    //useMantineTheme hook to access the theme directly in components
  const theme = useMantineTheme();

  return (

    <Box style={{ padding: 20, backgroundColor: theme.colorScheme === 'light' ? lightTheme.colors.background[0] : darkTheme.colors.background[0] }}>
        <Button style={{ backgroundColor: theme.colors.primary[6], color: theme.colors.secondary }}>
        Themed Button
        </Button>
        <Text>This is a text element styled with the {theme.colorScheme} theme</Text>
    </Box>
  );
};

export default ThemedButton;