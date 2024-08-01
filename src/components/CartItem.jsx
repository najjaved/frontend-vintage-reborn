import React, { useContext } from "react";
import { CartContext } from '../contexts/CartContext';
import { Card, Text, Button, Group, Image, TextInput } from '@mantine/core';
import { Navigate } from "react-router-dom";

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
    <Card className="cartItem" shadow="sm" padding="lg" radius="md" mt="md" withBorder>
      <Card.Section mt="xs">
        <Image
          src={product.images}
          height={200}
          width="auto"
          fit="contain"
        />
      </Card.Section>
      <Group position="apart" mt="xs" mb="xs">
        <Text size="sm" c="dimmed">{product.name}</Text>
        <Text size="sm" c="dimmed">{product.price}€</Text>
      </Group>
      <Group className="countHandler" justify="center" gap="xs" mt="md" mb="md">
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
