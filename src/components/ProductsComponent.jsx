import React, { useState, useEffect, useContext } from 'react';
import { Card, Image, Text, Badge, Button, Group, Space, SimpleGrid, AspectRatio, Loader, Container } from '@mantine/core';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';
//import { IconHeart } from '@tabler/icons-react'; 
import { CartContext } from '../contexts/CartContext';
import classes from '../styles/Products.module.css';

const ProductsComponent = ({ onEdit }) => {
  const { fetchWithToken, isAuthenticated, user} = useContext(SessionContext);
  const { addToCart, cartItems, products, setProducts } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  const calculateItemsQuantity = (items, product) => {
    const currentProduct = items.find(item => item.productId === product._id);
    if (currentProduct) {
      return currentProduct.quantity;
    }
    return 0;
  }

  const handleDelete = async (productId) => {
    const responseStatus = await fetchWithToken(`/products/${productId}`, 'DELETE'); // status is 204 if delete successful

    if (responseStatus === 204) {
      setProducts(products.filter(product => product._id !== productId)); // Remove the deleted product from products
    } else {
      console.log('Failed to delete product, returned with status code:', responseStatus);
    }
  };

  if (loading) {
    return <Container align= 'center'>
              <Loader size="xl" color="blue" type="bars" />;
            </Container>
  }

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
      justify="center"
      align="center"
      gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}
    >
      {products.map((product) => (
        <Card key={product._id} className= {classes.product}>
          <Card.Section className={classes.productImage}>
            <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
              <Image
                src={product.images}
                alt={product.name}
                radius="md"
                fit="contain"
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
              /> {/* w= 'auto' fit="contain" */}
            </AspectRatio>
          </Card.Section>
          <Group position="apart" h="xl" style={{ marginBottom: 5, marginTop: 5 }}>
            <Text weight={500}>{product.name}</Text>
            <Badge color="pink" variant="light">
              {product.category}
            </Badge>
          </Group>
          <Space h="md" />
          <Text size="md" c="dimmed" align='left'>
            {product.description}
          </Text>
          <Space h="xl" />
          <Text weight={700} size="lg" align='left' h="xl" c="teal.4"> Price:  {product.price}€</Text>
          <Group className={classes.buttonsGroup}>
            <Button variant="light" color="blue" component={Link} to={`/products/${product._id}`}>
              View Details
            </Button>
            {isAuthenticated? 
              ((user.role === "customer") && (
                <Button variant="filled" radius="lg" onClick={() => addToCart(product)} >
                  Add to Cart {
                    calculateItemsQuantity(cartItems, product) > 0 && <> [{calculateItemsQuantity(cartItems, product)}] </>}
                </Button>
              )):null            
            }

            {isAuthenticated? ((user.userId === product.createdBy ||user.role === "admin") && (
              <Group>
                <Button variant="light" color="blue" onClick={() => onEdit(product)}>
                  Edit
                </Button>
                <Button variant="light" color="red" onClick={() => handleDelete(product._id)}>
                  Delete
                </Button>
              </Group>
            )): null
           }
          </Group>
        </Card>
      ))}
    </SimpleGrid >
  );
};

export default ProductsComponent;
