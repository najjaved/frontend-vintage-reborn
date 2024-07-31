import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const initializeCartItems = (products) => {
  return products.map(product => ({
    ...product,
    id: product._id.toString(),
    quantity: 0
  }));
};

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  useEffect(() => {
    setCartItems(initializeCartItems(products));
  }, [products]);

  const addToCart = (productId) => {
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
