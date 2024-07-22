import React from 'react';
import { AppShell } from '@mantine/core';
import Header from './components/Header';
import MainContent from './components/MainContent';
import styles from './styles/App.module.css';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
        <AppShell.Header zIndex={200}>{<Header />}</AppShell.Header>
        <AppShell.Navbar zIndex={100}>{<Navbar />}</AppShell.Navbar>
        <AppShell.Main className={styles.app}> 
          <HeroSection />
        </AppShell.Main>
        <AppShell.Footer zIndex={200}>{<Footer />}</AppShell.Footer>
      </AppShell>
      
    );
}

export default App


