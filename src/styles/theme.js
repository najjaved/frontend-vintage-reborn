/* customize the appearance of components consistently across the app */
import { createTheme } from '@mantine/core'

const baseTheme = createTheme({
  colorScheme: 'light',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', // font family for the entire application
  headings: {
    fontFamily: 'Helvetica, sans-serif',
    sizes: {
      h1: 36,
      h2: 30,
      h3: 24,
    },
  },

});

// Light theme custom configuration 
export const lightTheme = {...baseTheme,
  colorScheme: 'light',
  colors: {
    primary: ['#f0f4ff', '#d9e4ff', '#b3c7ff', '#8aaaff', '#628dff', '#336dff', '#0051ff', '#0040cc', '#003399', '#002266'],
    secondary: ['#fdf2e6', '#fae0c3', '#f6c08e', '#f19f5c', '#ec7f2a', '#e65f00', '#b44c00', '#843800', '#552500', '#2b1300'],
    background: ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0'],
  },
  primaryColor: 'primary',
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
};

// Dark theme custom configuration 
export const darkTheme = {...baseTheme,
  colorScheme: 'dark',
  colors: {
    primary: ['#002266', '#003399', '#0040cc', '#0051ff', '#336dff', '#628dff', '#8aaaff', '#b3c7ff', '#d9e4ff', '#f0f4ff'],
    secondary: ['#2b1300', '#552500', '#843800', '#b44c00', '#e65f00', '#ec7f2a', '#f19f5c', '#f6c08e', '#fae0c3', '#fdf2e6'],
    background: ['#1a1b1e', '#2e2f33', '#3e3f43', '#4e4f53', '#5e5f63'],
  },
  primaryColor: 'primary',
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
};

export default baseTheme;
