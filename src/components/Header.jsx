import React, { useState } from 'react';
import { Image, Box, Title, Button, Drawer, Stack, Group } from '@mantine/core';
import { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import classes from '../styles/Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { IconShoppingCart } from '@tabler/icons-react';
import profileImage from '../assets/images/profile.png';
import loggedImage from '../assets/images/logged.png'; // Import logged image
import { IconUsers } from '@tabler/icons-react';
import LoginForm from './LoginForm';
import Logo from '../assets/images/Logo.png';
import {showNotification} from "../helpers/functions";
import { ActionIcon } from '@mantine/core';

const Header = () => {
  const { isAuthenticated, handleLogout } = useContext(SessionContext);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const navigate = useNavigate();

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpened(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpened(false);
  };

  const handelAccessCart = () => {
    if (isAuthenticated) {
      navigate("/profile/cart");
    }
    else {
      showNotification();
      return 0;
    }
    
  }

  return (
    <Box className={classes.header}>
      <Link to="/">
          <Image
            className={classes.logo}
            src={Logo}
            alt="logo"
            style={{ height: "50px", width: "auto" }}
          />
      </Link>
      <Title order={2} className={classes.title}>Vintage Reborn</Title>
      <Group>
        <ActionIcon onClick={handelAccessCart} >
          <IconShoppingCart stroke={1.5} 
              width={24}
              height={24}
            />
        </ActionIcon>

        {!isAuthenticated && (
          <>
            <ActionIcon onClick={handleOpenLogin} variant = "white" radius="lg">
              <Image src={profileImage} alt="Profile" width={24} height={24} />
            </ActionIcon>
          </>
        )}
        {isLoginOpen && <LoginForm isOpen={isLoginOpen} onClose={handleCloseLogin} />}

        {isAuthenticated && (
          <>
            <Button onClick={handleDrawerOpen} style={{ padding: 0, border: 'none', background: 'none' }}>
              <Image src={loggedImage} alt="Menu" width={24} height={24} />
            </Button>
            <Drawer
              opened={drawerOpened}
              onClose={handleDrawerClose}
              title="User Menu"
              padding="md"
              size="md"
              position="right"
            >
              <Stack>
                <Link to="/profile/" className={classes.navLink}> Profile Page</Link>
                <Link to="/profile/orders" className={classes.navLink}> View Orders </Link>
                <Button type='button' onClick={handleLogout}> Logout </Button>
              </Stack>
            </Drawer>
          </>
        )}
      </Group>
    </Box>
  );
};

export default Header;
