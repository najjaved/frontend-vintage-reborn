import React, { useContext, useState } from 'react';
import { Container, Title, TextInput, Button, Group, Text, Divider, Modal } from '@mantine/core';
import { useForm } from '@mantine/form';
import { CartContext } from '../../contexts/CartContext';
import { SessionContext } from '../../contexts/SessionContext';
import { useNavigate } from 'react-router-dom';
import classes from '../../styles/Checkout.module.css';
import { useDisclosure } from "@mantine/hooks";

const CheckoutPage = () => {
  const { cartItems, resetCart, getTotalCartAmount, products } = useContext(CartContext);
  const { fetchWithToken, user } = useContext(SessionContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [modalOpened, { open, close }] = useDisclosure(false);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

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

  const checkoutHandle = () => { 
    open();
    resetCart();
    
  };

  const handleModalClose = () => {
    close();
    navigate("/"); //toDO: add this after stripe functionality
  };

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
      if (responseData) {
        console.log('Order placed successfully:', responseData);
        checkoutHandle(); // empty the cart after successful order placement, later add payment feature
        //navigate('/'); 
      }
    } catch (error) {
      console.log('Error placing order:', error);
    }
  };

  // using Mantine form
  return (
    <Container className={classes.checkoutContainer}>
      <Title  className={classes.title}>Checkout</Title>
      <form onSubmit={mantineForm.onSubmit(handleSubmit)} className={classes.checkoutForm}>
        <Group className= {classes.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <TextInput id="firstName" {...mantineForm.getInputProps('firstName')}/>
        </Group>

        <Group className= {classes.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <TextInput id="lastName" {...mantineForm.getInputProps('lastName')}/>
        </Group>

        <Group className= {classes.formGroup}>
            <label htmlFor="streetHouseNumber">Street and House Number</label>
            <TextInput id="streetHouseNumber"  {...mantineForm.getInputProps('streetHouseNumber')}/>
        </Group>

        <Group className= {classes.formGroup}>
            <label htmlFor="city">City</label>
            <TextInput id="city"   {...mantineForm.getInputProps('city')} />
        </Group>

        <Group className= {classes.formGroup}>
            <label htmlFor="zipCode">ZIP Code</label>
            <TextInput id="zipCode"   {...mantineForm.getInputProps('zipCode')} />
        </Group>

        <Group position="apart" mt="md" my = "xl"  justify="center" grow>
          <Button variant="outline" onClick={() => navigate('/profile/cart')}>Back to Cart</Button>
          <Button type="submit"  onClick={checkoutHandle}>Place Order</Button>
        </Group>
      </form>

      <Divider my="lg" />

      <Container className={classes.checkoutSummary}>
        <Title order = {2} size= "h2">Order Summary</Title>
        {cartItems.map((item) => {
          const product = products.find(p => p._id === item.productId);
          return (<Group key={item.productId} className={classes.summaryItem}>
            <Text>{product.name}</Text>
            <Text>{item.quantity} x {item.price}€</Text>
          </Group>)
        })}
        <Group className={classes.summaryTotal}>
          <Text fw={700}>Total:</Text>
          <Text fw={700}>{totalAmount.toFixed(2)}€</Text>
        </Group>
      </Container>

      <Modal
          opened={modalOpened}
          onClose={handleModalClose}
          title="Payment Successful!"
          centered
        >
          <Container>
            <Title className={classes.title}>
              Thank you for shopping & supporting our green planet initiative!
            </Title>
          </Container>
        </Modal>

    </Container>
  );
};

export default CheckoutPage;
