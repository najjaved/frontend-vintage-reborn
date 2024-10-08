import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, Paper} from '@mantine/core'; // ColorSchemeProvider, ColorScheme,
import { BrowserRouter } from 'react-router-dom';
import SessionContextProvider from './contexts/SessionContext.jsx';
import CartContextProvider from './contexts/CartContext.jsx';
import { Notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'
import './styles/global.css'
import baseTheme from './styles/theme'; 
import AppShellComponent from './components/AppShellComponent.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <SessionContextProvider>
          <CartContextProvider>
              <MantineProvider theme={baseTheme} defaultColorScheme= 'auto'> //color scheme based on user OS
                <Paper componenet = "container" style = {{minHeight: "100vh"}} size="responsive" >
                  <Notifications />
                  <AppShellComponent/> 
                </Paper>        
              </MantineProvider>
            </CartContextProvider>
        </SessionContextProvider>
      </BrowserRouter>
    </React.StrictMode>
);

