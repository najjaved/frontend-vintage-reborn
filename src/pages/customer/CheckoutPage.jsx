import React, { useContext, useState } from 'react';
import { Container, Title, TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { CartContext } from '../../contexts/CartContext';
import { SessionContext } from '../../contexts/SessionContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const { fetchWithToken, user, token } = useContext(SessionContext);
  const navigate = useNavigate();

  const mantineForm = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      streetHouseNumber: '',
      city: '',
      zipCode: '',
    },
    validate: {
      firstName: (value) => (value ? null : 'First name is required'),
      lastName: (value) => (value ? null : 'Last name is required'),
      streetHouseNumber: (value) => (value ? null : 'Street and house number are required'),
      city: (value) => (value ? null : 'City is required'),
      zipCode: (value) => (value ? null : 'ZIP code is required'),
    },
  });

  const handleSubmit = async (values) => {
    const orderPayload = {
        userId: user.userId,
      ...values,
      orderItems: cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };

    try {
      const responseData = await fetchWithToken(`/orders`, 'POST', orderPayload);
      console.log(token, user)
      if (responseData) {
        console.log('Order placed successfully:', responseData);
        navigate('/'); // toDo: open order confirmation popup
      }
    } catch (error) {
      console.log('Error placing order:', error);
    }
  };

  // using Mantine form
  return (
    <Container>
      <Title order={1}>Checkout</Title>
      <form onSubmit={mantineForm.onSubmit(handleSubmit)}>
        <TextInput label="First Name" {...mantineForm.getInputProps('firstName')} />
        <TextInput label="Last Name" {...mantineForm.getInputProps('lastName')} />
        <TextInput label="Street and House Number" {...mantineForm.getInputProps('streetHouseNumber')} />
        <TextInput label="City" {...mantineForm.getInputProps('city')} />
        <TextInput label="ZIP Code" {...mantineForm.getInputProps('zipCode')} />

        <Group position="apart" mt="md">
          <Button variant="outline" onClick={() => navigate('/profile/cart')}>Back to Cart</Button>
          <Button type="submit">Place Order</Button>
        </Group>
      </form>
    </Container>
  );
};

export default CheckoutPage;
