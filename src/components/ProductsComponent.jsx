import React, { useState, useEffect, useContext } from 'react';
import { Card, Image, Text, Badge, Button, Group, Space, Container, SimpleGrid, AspectRatio } from '@mantine/core';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';
//import { IconHeart } from '@tabler/icons-react'; 
import { CartContext } from '../contexts/CartContext';
import classes from '../styles/Products.module.css';

const ProductsComponent = ({ onEdit }) => {
  const { token, isAuthenticated, user} = useContext(SessionContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`); // GET request
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the fetch function
  }, []);

  const calculateItemsQuantity = (items, product) => {
    const currentProduct = items.find(item => item.productId === product._id);
    if (currentProduct) {
      return currentProduct.quantity;
    }
    return 0;
  }

  const handleDelete = async (productId) => {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${productId}`;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (response.ok) {
        setProducts(products.filter(product => product._id !== productId)); // Remove the deleted product from state
      } else {
        console.error('Failed to delete product, response status:', response.status);
      }
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  if (loading) {
    return <Container>Loading...</Container>;
  }

  //toDo: add classes in css module for listings page styling
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
        <Card key={product._id} className= {classes.product} shadow="sm" padding="lg" style={{ marginBottom: '1rem' }}>
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
              (user.role === "customer") && (
                <Button variant="filled" radius="lg" onClick={() => addToCart(product)} >
                  Add to Cart {
                    calculateItemsQuantity(cartItems, product) > 0 && <> [{calculateItemsQuantity(cartItems, product)}] </>}
                </Button>
              ):null            
            }

            {isAuthenticated? (user.userId === product.createdBy ||user.role === "admin") && (
              <Group>
                <Button variant="light" color="blue" onClick={() => onEdit(product)}>
                  Edit
                </Button>
                <Button variant="light" color="red" onClick={() => handleDelete(product._id)}>
                  Delete
                </Button>
              </Group>
            ): null
           }
          </Group>
        </Card>
      ))}
    </SimpleGrid >
  );
};

export default ProductsComponent;
