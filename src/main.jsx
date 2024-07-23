import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, Paper} from '@mantine/core'; // ColorSchemeProvider, ColorScheme,
import { BrowserRouter } from 'react-router-dom';
import SessionContextProvider from './contexts/SessionContext.jsx';

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'
import './styles/global.css'
import theme from './styles/theme.js';
import AppShellComponent from './components/AppShellComponent.jsx';

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <SessionContextProvider>
          {/*<ColorSchemeProvider colorScheme= {colorScheme} toggleColorScheme =  {toggleColorScheme}>*/}
            <MantineProvider theme={{ theme }} defaultColorScheme="auto"> //color scheme value will be controlled by the user OS
              <Paper padding = "md" radious = {0} style = {{minHeight: "100vh"}}>
                <AppShellComponent /> 
              </Paper>
            
            </MantineProvider>
          {/*</ColorSchemeProvider>*/}
        </SessionContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  )