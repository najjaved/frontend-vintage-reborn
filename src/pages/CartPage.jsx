import React from 'react';
import { Container, Title } from '@mantine/core';
import CartComponent from '../components/CartComponent';

const CartPage = () => {
  return (
    <Container>
      <Title order={1} align="center" my="md">
        Cart
      </Title>
      <CartComponent />
    </Container>
  );
};

export default CartPage;
