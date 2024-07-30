import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);


export const CartContextProvider = ({ children }) => {

//toD: check getDefaultCart logic
const getDefaultCart = () => {
  let cart = {};
  for (let product = 1; product < products.length + 1; product++) {
    cart[product] = 0;
  }
  return cart;
};

const [products, setProducts] = useState([]);
const [cartItems, setCartItems] = useState(getDefaultCart()); //toDo: use useEfect, decide at mounting time, see Mat's comments




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
  setCartItems(getDefaultCart());
}, [products]);

const addToCart = (productId) => {
  console.log("added to cart product with id: ", productId);
  setCartItems((prevCartObject) => ({ ...prevCartObject, [productId]: prevCartObject[productId] + 1 })); // add to cart newly added item(previousCount +1) i.e. cartItems[currentProduct.id]
};

const removeFromCart = (productId) => {
  setCartItems((prevCartObject) => ({ ...prevCartObject, [productId]: prevCartObject[productId] - 1 }));
};

const updateCartItemCount = (newAmount, productId) => {
  setCartItems((prev) => ({ ...prev, [productId]: newAmount }));
};

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = products.find((aProduct) => aProduct._id === Number(item)); //toDO, modify according to our databse, id is not just a number, check others solution..Aso for getDefaultCart
      totalAmount += cartItems[item] * itemInfo.price;
    }
  }
  return totalAmount;
};

const checkout = () => {
  setCartItems(getDefaultCart());
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