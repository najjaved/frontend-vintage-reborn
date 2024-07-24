import React from 'react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { lightTheme, darkTheme } from '../styles/theme';

const LightDarkModeButton = () => {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();
  const dark = colorScheme  == 'dark';
  colorScheme === 'dark' ? darkTheme : lightTheme

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      size="lg"
      aria-label="Toggle color scheme"
    >
      {dark ? (
        <SunIcon style={{ width: 18, height: 18 }} />
      ) : (
        <MoonIcon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );
}

export default LightDarkModeButton;