import { createContext, useEffect, useState, useContext } from 'react';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
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
        const { tokenPayload } = await response.json();
        console.log("token payload after token verification: ", tokenPayload);
        setUser(tokenPayload);
        if (tokenPayload.role === "admin") {
          setIsAdmin(true);
        }

        // Fetch the cart for the authenticated user
        /*
        const cartResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/cart`, {
          headers: {
            Authorization: `Bearer ${tokenToVerify}`,
          },
        });
        if (cartResponse.ok) {
          const cartData = await cartResponse.json();
          setCartItems(cartData.items);
        } else {
          setCartItems([]);
        } */


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
      const data = await response.json();
      console.log('response data: ', data);
      if (response.ok) {
        return response.status;
      }
    } catch (error) {
      console.log(`******** Error ${method} with token: ${error}********`);
    }
  };


  const handleLogout = () => {
    removeToken();
    setToken();
    setIsAuthenticated(false);
    setUser(null);
    setIsAdmin(false);
    setCartItems([]); // empty the cart
  };

  return (
    <SessionContext.Provider
      value={{ isAuthenticated, isLoading, token, setToken, fetchWithToken, handleLogout, user, isAdmin, verifyToken, cartItems, setCartItems }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
