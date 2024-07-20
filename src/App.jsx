import React from 'react';
import { AppShell } from '@mantine/core';
import Header from './components/Header';
import MainContent from './components/MainContent';
import styles from './styles/App.module.css';

function App() {
 
  return (
    <AppShell  className={styles.app}
        padding="md"
        header={{ height: 60 }}
        navbar={{
        width: 300,
        breakpoint: 'sm'
      }}
    >
      <AppShell.Header zIndex={100}>{<Header />}</AppShell.Header>
      <AppShell.Navbar zIndex={200}>Navbar</AppShell.Navbar>
      <AppShell.Main className={styles.app}> 
        <MainContent />
      </AppShell.Main>
    </AppShell>
      
    );
}

export default App


