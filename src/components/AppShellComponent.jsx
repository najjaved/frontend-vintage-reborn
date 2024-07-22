import React from 'react';
import { AppShell } from '@mantine/core';
import Header from './Header';
import styles from '../styles/App.module.css';
import Footer from './Footer';
import Navbar from './Navbar';
import App from "../App";

const AppShellComponent= ()=> {
 
  return (
      <AppShell  className={styles.app}
          padding="md"
          header={{ height: 60 }}
          navbar={{
          width: 300,
          breakpoint: 'sm'
        }}
          footer={{ height: 100 }}
      >
        <AppShell.Header zIndex={200}>{<Header />}</AppShell.Header>
        <AppShell.Navbar zIndex={100}>{<Navbar />}</AppShell.Navbar>
        <AppShell.Main className={styles.app}> 
          <App />
        </AppShell.Main>
        <AppShell.Footer zIndex={200}>{<Footer />}</AppShell.Footer>
      </AppShell>
      
    );
}

export default AppShellComponent


