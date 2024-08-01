import React, { useContext } from "react";
import { CartContext } from '../contexts/CartContext';
import { Card, Text, Button, Group, Image, TextInput } from '@mantine/core';
import { Navigate } from "react-router-dom";
import classes from '../styles/CartPage.module.css';

const CartItem = ({ product }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);

  if (!product) {
    console.log('product not found in products list', product);
    return <Navigate to={`/products/`} />;
  }

  // Find the corresponding cart item
  const cartItem = cartItems.find(item => item.productId === product._id);
  const quantity = cartItem ? cartItem.quantity : 0;

 
  const handleChange = (event) => {
    const newAmount = Number(event.target.value);
    if (newAmount >= 0) {
      updateCartItemCount(newAmount, product);
    }
  };

  return (
    <Card className={classes.cartItem}  mt="xl" >
       <Text fw= {200} className={classes.text}>{product.name}</Text>
      <Card.Section mt="lg">
        <Image
          src={product.images}
        />
      </Card.Section>
      <Group className={classes.text} position="apart" mt="xs" mb="xs">
        <Text c="dimmed">Price: </Text>
        <Text c="dimmed">{product.price}€</Text>
      </Group>
      <Group className={classes.countHandler} mt="md" mb="md">
        <Button onClick={() => removeFromCart(product)} > - </Button>
        <TextInput
          value={quantity.toString()} 
          onChange={handleChange}
          type="number" 
        />
          <Button onClick={() => addToCart(product)}> + </Button>
      </Group>
    </Card>
  );
};

export default CartItem;
