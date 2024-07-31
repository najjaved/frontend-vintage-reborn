import { createContext, useEffect, useContext, useState } from "react";
import { SessionContext } from '../contexts/SessionContext';

export const CartContext = createContext(null);

const initializeCartItems = (products) => {
  return products.map(product => ({
    ...product,
    id: product._id.toString(),
    quantity: 0
  }));
};

const CartContextProvider = ({ children }) => {
  const { fetchWithToken, token, user } = useContext(SessionContext); 
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

//toDo move getAllProducts to helper functions, also used in allProductsPage
const getAllProducts = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
    console.log("response format:", response); //toDO: remove later
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    setProducts(data);
  } catch (error) {
    console.log("Fetch error: ", error);
  }
};

useEffect(() => {
  getAllProducts();
}, []);

useEffect(() => {
  setCartItems(initializeCartItems(products));
}, [products]);

/* add protect routes on BE for fetching cart specific to the userId
const fetchCartItems = async () => {
  try {
    const response = await fetchWithToken(`${import.meta.env.VITE_API_URL}/api/cart`);
    if (response) {
      setCartItems(response.cartItems || []);
    }
  } catch (error) {
    console.log('Error fetching cart items:', error);
  }
};

const addToCart = async (productId) => {
  try {
    const response = await fetchWithToken(`${import.meta.env.VITE_API_URL}/api/cart`, 'POST', { productId });
    if (response) {
      setCartItems(response.cartItems);
    }
  } catch (error) {
    console.log('Error adding to cart:', error);
  }
};

const removeFromCart = async (productId) => {
  try {
    const response = await fetchWithToken(`${import.meta.env.VITE_API_URL}/api/cart`, 'DELETE', { productId });
    if (response) {
      setCartItems(response.cartItems);
    }
  } catch (error) {
    console.log('Error removing from cart:', error);
  }
};

const updateCartItemCount = async (newAmount, productId) => {
  try {
    const response = await fetchWithToken(`${import.meta.env.VITE_API_URL}/api/cart`, 'PUT', { productId, quantity: newAmount });
    if (response) {
      setCartItems(response.cartItems);
    }
  } catch (error) {
    console.log('Error updating cart item count:', error);
  }
};

// Fetch cart items after user is authenticated
useEffect(() => {
  if (isAuthenticated) {
    fetchCartItems();
  }
}, [isAuthenticated, token]);
*/

const addToCart = async (productId) => {
  setCartItems(prevCart => prevCart.map(item => 
    item.id === productId 
      ? { ...item, quantity: item.quantity + 1 }
      : item
  ));
};

const removeFromCart = (productId) => {
  setCartItems(prevCart => prevCart.map(item => 
    item.id === productId && item.quantity > 0
      ? { ...item, quantity: item.quantity - 1 }
      : item
  ));
};

const updateCartItemCount = (newAmount, productId) => {
  setCartItems(prevCart => prevCart.map(item => 
    item.id === productId 
      ? { ...item, quantity: newAmount }
      : item
  ));
};

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item of cartItems) {
    if (item.quantity > 0) {
      const itemInfo = products.find(product => product._id === item.id);
      totalAmount += item.quantity * itemInfo.price;
    }
  }
  return totalAmount;
};

const checkout = () => {
  setCartItems(initializeCartItems(products));
  // go tochecout page and POST an order
};

const contextValue = {
  products,
  cartItems,
  addToCart,
  updateCartItemCount,
  removeFromCart,
  getTotalCartAmount,
  checkout,
  getAllProducts,
};

return (
  <CartContext.Provider value={contextValue}>
    {children}
  </CartContext.Provider>
);
};

export default CartContextProvider;
