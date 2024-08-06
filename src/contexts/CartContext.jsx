import { createContext, useEffect, useContext, useState } from "react";
import { SessionContext } from '../contexts/SessionContext';
import {showNotification} from "../helpers/functions";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const { fetchWithToken, token, isAuthenticated, user, cartItems, setCartItems } = useContext(SessionContext); 
  //const [cartItems, setCartItems] = useState([]);
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
      console.log("Error fetching products: ", error);
    }
  };

useEffect(() => {
  getAllProducts();
}, []);

/**** add protect routes on BE for fetching cart specific to the userId
const addToUserCart = async (product) => {
    try {
      const payload = { productId: product._id, quantity: 1 };
      const response = await fetchWithToken(`/cart`, 'POST', payload);
      if (response.ok) {
        const cartData = await response.json();
        setCartItems(cartData.items);
      }
    } catch (error) {
      console.log('Error adding item to cart:', error);
    }
  };

  const removeFromUserCart = async (product) => {
    try {
      const payload = { productId: product._id };
      const response = await fetchWithToken(`/cart`, 'DELETE', payload);
      if (response.ok) {
        const cartData = await response.json();
        setCartItems(cartData.items);
      }
    } catch (error) {
      console.log('Error removing from cart:', error);
    }
  };

  const updateCartItemCount = async (newAmount, productId) => {
    try {
      const payload = { productId, quantity: newAmount };
      const response = await fetchWithToken(`/cart`, 'PUT', payload);
      if (response.ok) {
        const cartData = await response.json();
        setCartItems(cartData.items);
      }
    } catch (error) {
      console.log('Error', error)
}

// Fetch the cart for the authenticated user
const fetchCartItems = async () => {
  try {
    const cartData = await fetchWithToken(`/cart`);
    if (cartData) {
      setCartItems(cartData.items);
    }
    else {
      setCartItems([]);
    }
    
  } catch (error) {
    console.log('Error fetching cart items:', error);
  }
};

useEffect(() => {
  if (isAuthenticated) {
    fetchCartItems();
  }
}, [isAuthenticated, token]); // fetch items in cart if user changes
****/

const addToCart = async (product) => {
  if (!isAuthenticated) {
    showNotification();
    return 0;
  }
  
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

/* OR using reduce
  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.price; //missing product.price
    }, 0);
  };
*/

const resetCart = () => {
  setCartItems([]);
};

const contextValue = {
  cartItems,
  addToCart,
  updateCartItemCount,
  removeFromCart,
  getTotalCartAmount,
  resetCart,
  products, 
  setProducts,
  getAllProducts
};

return (
  <CartContext.Provider value={contextValue}>
    {children}
  </CartContext.Provider>
);
};

export default CartContextProvider;
