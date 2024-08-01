import React, { useContext, useState } from 'react';
import { Button, Container, Title, Text, Modal, Group, Image, Divider } from '@mantine/core';
import CartItem from '../../components/CartItem';
import { Link, useNavigate } from 'react-router-dom';
import classes from '../../styles/CartPage.module.css';
import { CartContext } from '../../contexts/CartContext';
import { useDisclosure } from "@mantine/hooks";

const CartPage = () => {
  const {products, cartItems, getTotalCartAmount, checkout } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();
  const [modalOpened, { open, close }] = useDisclosure(false);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

  const navigate = useNavigate();

  const handleFakePayReset = () => {
    checkout(); 
    open();
    //navigate("/checkout"); //toDO: add this after stripe functionality
  };

  const handleModalClose = () => {
    close();
    setShowEmptyCartMessage(totalAmount <= 0);
  };

  const isCartEmpty = cartItems.every(item => item.quantity === 0);

  return (
    <Container className={classes.cart}>
      {!isCartEmpty && (
        <Title order={1} align="center" my="xl" weight={500}>Items in your Cart</Title>
      )}

      <Container >
        {cartItems.map((item) => {
          const productData = products.find(p => p._id === item.productId);
          console.log('product going to the cart', productData);
          if (item.quantity > 0) {
            return <CartItem key={item.productId} product={productData} />;
          }
          return null;
        })}
      </Container>

      {isCartEmpty && (
        <Container>
          <Group className={classes.emptyCart} >
            <Title order = {1}>Your Shopping Cart is empty</Title>
            <Image className={classes.emptyImage} src="https://placehold.co/600x400?text=Placeholder" alt="Placeholder" />
          </Group>
        </Container>
      )}

      <Container mt="md">
        {totalAmount > 0 && (
          <Text fw={500} size="lg" mt="md">Total Price: {totalAmount.toFixed(2)}€</Text>
        )}

        {!isCartEmpty && (
          <Container>
            <Divider my="lg" />
            <Container>
              <Group className={classes.cartButtons}>
                <Button
                  size="lg"
                  variant="gradient"
                  gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                  component={Link}
                  to="/products"
                >
                  Continue Shopping
                </Button>
                <Button
                  size="lg"
                  variant="gradient"
                  gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                  onClick={handleFakePayReset}
                >
                  Proceed to Checkout
                </Button>
              </Group>
            </Container>
          </Container>
        )}

        <Modal
          opened={modalOpened}
          onClose={handleModalClose}
          title="Payment Successful!"
          centered
        >
          <Container>
            <Title>
              Thank you for shopping & supporting our green planet initiative!
            </Title>
            <Image
              className="emptyimage"
              src="https://placehold.co/600x400?text=Placeholder"
              alt='Placeholder image'
            />
          </Container>
        </Modal>
      </Container>
    </Container>
  );
};

export default CartPage;
