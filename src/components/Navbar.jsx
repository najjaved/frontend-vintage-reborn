import React from 'react';
import { useContext } from 'react'
import { Container, Stack, Select, Button } from '@mantine/core';
import classes from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext'

const Navbar = () => {
  //const [user, setUser] = useState({}) //toDo:put in context
  const { isAuthenticated, handleLogout } = useContext(SessionContext)

  return (
      <Container className={classes.navbar}>
          <Stack  position="center" spacing="sm" direction="column">
            <Link to="/" className={classes.navLink}>Home</Link>
            <Link to="#featured" className={classes.navLink}>Featured</Link>
            <Link to="/#about" className={classes.navLink}>About</Link>
            {!isAuthenticated && (<Link to="/signup" className={classes.navLink}>Signup Test</Link>)}
            {!isAuthenticated && (<Link to="/login" className={classes.navLink}>Login Test</Link>)}
            {/*{isAuthenticated && (<Link to={`/profile/${user._id}`} className={classes.navLink}>Profile Page</Link>)}
            & await fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`)*/}
            {isAuthenticated && (
              <>        
                <Button component= {Link} to='/products/new'> Add a new product</Button>
                <Button type='button' onClick={handleLogout}> Logout </Button>
              </>
            )}

            {/* 
            <Select id="#theme"
              label="Chose color scheme"
              placeholder="Pick value"
              data={['light', 'dark']}
            /> */}
           
           
          </Stack >
      </Container>
  );
};

export default Navbar;