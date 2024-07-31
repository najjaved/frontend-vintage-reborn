import { createContext, useEffect, useState } from 'react';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const removeToken = () => {
    window.localStorage.removeItem('authToken');
  };

  const verifyToken = async (tokenToVerify) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify`, {
        headers: {
          Authorization: `Bearer ${tokenToVerify}`,
        },
      });

      // if response is ok, set token and authenticate to true
      if (response.status === 200) {
        setToken(tokenToVerify);
        setIsAuthenticated(true);

        // get userId and role
        const {tokenPayload} = await response.json();
        console.log("token payload after token verification: ", tokenPayload);
        setUser(tokenPayload);
        if (tokenPayload.role === "admin") {
          setIsAdmin(true);
        }

        setIsLoading(false);
      } else {
        setIsLoading(false);
        removeToken();
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      removeToken();
    }
  };

  useEffect(() => {
    const localToken = window.localStorage.getItem('authToken'); // check local storage for token
    if (localToken) {
      verifyToken(localToken); // if token exists, verify token with BE
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem('authToken', token);
      verifyToken(token);
    }
  }, [token]);

  const fetchWithToken = async (endpoint, method = 'GET', payload) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api${endpoint}`, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        return response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    removeToken();
    setToken();
    setIsAuthenticated(false);
    setUser(null);
    setIsAdmin(false);
  };

  const fetchCartItems = async (token) => {
    try {
      const response = await fetchWithToken('/cart');
      if (response) {
        setCartItems(response.cartItems || []);
      }
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };
  return (
    <SessionContext.Provider
      value={{ isAuthenticated, isLoading, token, setToken, fetchWithToken, handleLogout, user, isAdmin, fetchCartItems }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
