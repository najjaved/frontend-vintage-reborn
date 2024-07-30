import React, { useContext } from "react";
import { CartContext } from '../contexts/CartContext';
import { Card, Text, Button, Group, Image, TextInput } from '@mantine/core';
import { Navigate } from "react-router-dom";

const CartItem = ({product}) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);
  console.log("product is: ", product);

  if(!product) {
    console.log('product not found in products list',product );
    return <Navigate to= {`/products/`} />;

  }
  const item = cartItems.find(item => item._id === product._id);

  // toDo: CSS
  return (
    <Card className="cartItem">
        <Card.Section>
            <Image 
            src={product.images}
            h={200}
            w="auto"
            fit="contain"
            />
        </Card.Section>
        <Card.Section className="description">
            <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
                <Text weight={500}>{product.name} </Text>
                <Text>{product.price}€</Text>
            </Group>

            <Group className="countHandler">
                <Button onClick={() => removeFromCart(product._id)}> - </Button>
                <TextInput
                    value={item ? item.quantity : 0}
                    onChange={(event) => updateCartItemCount(Number(event.target.value), product._id)}
                />
                <Button onClick={() => addToCart(product._id)}> + </Button>
            </Group>
        </Card.Section>
    </Card>
  );
};

export default CartItem;