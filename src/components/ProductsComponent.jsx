import React, { useState, useEffect, useContext } from 'react';
import { Card, Image, Text, Badge, Button, Group, Space } from '@mantine/core';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';
//import { IconHeart } from '@tabler/icons-react'; 
import { CartContext } from '../contexts/CartContext';

const ProductsComponent = ({ onEdit }) => {
  const { token } = useContext(SessionContext);
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

  const handleDelete = async (productId) => {
    const url = `${import.meta.env.VITE_API_URL}/products/${productId}`;
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <Card key={product._id} shadow="sm" padding="lg" style={{ marginBottom: '1rem' }}>
          <Card.Section>
            <Image src={product.images} alt={product.name}
              h={160}
              radius="md"
              fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            /> {/* w= 'auto' fit="contain" */}
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
          <Group position="apart" style={{ marginTop: '1rem' }}>
            <Button variant="light" color="blue" onClick={() => addToCart(product._id)}>
              Add to Cart {cartItems[product._id] > 0 && <> ({cartItems[product._id]}) </>}
            </Button>
            <Button variant="light" color="blue" onClick={() => onEdit(product)}>
              Edit
            </Button>
            <Button variant="light" color="red" onClick={() => handleDelete(product._id)}>
              Delete
            </Button>
            <Button variant="light" color="blue" component={Link} to={`/products/${product._id}`}>
              View Details
            </Button>
          </Group>
        </Card>
      ))}
    </div>
  );
};

export default ProductsComponent;
