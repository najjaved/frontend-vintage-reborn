import { createTheme } from '@mantine/core'

const theme = createTheme({
  /* customize the Mantine theme */
  colors: {
    brand: ['#f4f4f4', '#e4e4e4', '#d4d4d4', '#c4c4c4', '#b4b4b4'],
  },
  primaryColor: 'brand',
  fontFamily: 'Arial, sans-serif',
  headings: {
    fontFamily: 'Arial, sans-serif',
  },

});

export default theme
