import React, { useContext, useState } from 'react';
import { Button, Container, Title, Text, Modal, Group, Image, Divider } from '@mantine/core';
import CartItem from '../../components/CartItem';
import { Link } from 'react-router-dom';
import classes from '../../styles/CartPage.module.css';
import { CartContext } from '../../contexts/CartContext';
import { useDisclosure } from "@mantine/hooks";

const CartPage = () => {
  const { products,cartItems, getTotalCartAmount, checkout } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();

  const [modalOpened, { open, close }] = useDisclosure(false);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

  const handleFakePayReset = () => {
    checkout();
    open(); //toDO: add this after stripe functionality
    //navigate("/checkout");
  };

  const handleModalClose = () => {
    close();
    // Set showEmptyCartMessage to true only if the cart is empty
    setShowEmptyCartMessage(totalAmount <= 0);
  };

  return (
    <Container className = {classes.cart}> {/*add CSS module*/} 
      <Title order={1} align="center" my="xl" weight={500}>Items in your Cart</Title>

      <Container className = {classes.cartItems}>
      {products.map((currentProduct) => {
          if (cartItems[currentProduct._id] !== 0) {
            return <CartItem key={currentProduct._id} product={currentProduct} />;
          }
          //return null;
        })}
      </Container>

      <Container>
        {totalAmount > 0 ? (
            <Text >Subtotal: {totalAmount.toFixed(2)}€</Text>
          ) : null}


        <Container>
          {showEmptyCartMessage && (
            <Group className="emptycart">
              <Title className="carth1">Your Shopping Cart is empty</Title>
              <Image className="emptyimage" src={''} alt="Placeholder" />
            </Group>
          )}
         <Divider my="lg" />
          <Container>
            <Group className="cart-buttons">
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

          <Modal
            opened={modalOpened}
            onClose={handleModalClose}
            title="Payment Successful!"
            centered
          >
            <Container>
              <Title>
                Thank you for shopping & supporting our green planet iniative!
              </Title>
              <Image
                className="emptyimage"
                src="https://placehold.co/600x400?text=Placeholder"
                alt= 'Placeholder image'
              />
            </Container>
          </Modal>
        </Container>

      </Container>
      
    </Container>
  );
};

export default CartPage;
