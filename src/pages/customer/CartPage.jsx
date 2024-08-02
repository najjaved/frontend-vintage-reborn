import React, { useContext } from 'react';
import { Button, Container, Title, Text, Group, Image, Divider } from '@mantine/core';
import CartItem from '../../components/CartItem';
import { Link, useNavigate } from 'react-router-dom';
import classes from '../../styles/CartPage.module.css';
import { CartContext } from '../../contexts/CartContext';


const CartPage = () => {
  const {products, cartItems, getTotalCartAmount } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/profile/checkout");
  };
  

  const isCartEmpty = cartItems.every(item => item.quantity === 0);

  return (
    <Container className={classes.cart}>
      {!isCartEmpty && (
        <Title order={1} className={classes.title}>Items in your Cart</Title>
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
            <Title order = {1} className={classes.title}>Your Shopping Cart is empty</Title>
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
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                </Button>
              </Group>
            </Container>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default CartPage;
