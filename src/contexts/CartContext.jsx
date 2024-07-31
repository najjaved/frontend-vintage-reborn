import { createContext, useEffect, useContext, useState } from "react";
import { SessionContext } from '../contexts/SessionContext';

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  //const { fetchWithToken, token, user } = useContext(SessionContext); 
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
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

/*
const addToCart = async (product) => {
  const newArray = cartItems.filter(item => item._id === product._id)

  if (newArray.length !==0){
    setCartItems(prevCart => prevCart.map(item => 
      item.id === product._id 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));

  }
  else {
    const cartItem = {productId: product._id, quantity: 1}
    setCartItems(cartItems.push(cartItem));
    console.log(cartItems)

  }
  
};
*/
const addToCart = async (product) => {
  setCartItems(prevCart => {
    const existingItem = prevCart.find(item => item.productId === product._id);
    if (existingItem) {
      return prevCart.map(item => 
        item.productId === product._id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevCart, { productId: product._id, quantity: 1 }];
    }
  });
};


const removeFromCart = (product) => {

  setCartItems(prevCart => prevCart.map(item => 
    (item.productId === product._id && item.quantity) > 0
      ? {...item,  quantity: item.quantity -1 }
      : item
  ));

};


const updateCartItemCount = (newAmount, product) => {
  setCartItems(prevCart => prevCart.map(item => 
    item.id === product._id 
      ? { ...item, quantity: newAmount }
      : item
  ));
};

const getTotalCartAmount = () => {
  let totalAmount = 0;
    for (const item of cartItems) {
      if (item.quantity > 0) {
        const currentProduct = products.find(product => product._id === item.productId);
        totalAmount += item.quantity * currentProduct.price;
      }
    }
    return totalAmount;
};

const checkout = () => {
  setCartItems([]);
  // go to checkout page and POST an order
};

const contextValue = {
  cartItems,
  addToCart,
  updateCartItemCount,
  removeFromCart,
  getTotalCartAmount,
  checkout,
  products
};

return (
  <CartContext.Provider value={contextValue}>
    {children}
  </CartContext.Provider>
);
};

export default CartContextProvider;
