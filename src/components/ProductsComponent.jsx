import React, { useState, useEffect, useContext } from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';

const ProductsComponent = ({ onEdit }) => {
  const { token } = useContext(SessionContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const url = `http://localhost:5006/api/products/${productId}`;
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
            <Image src={product.image} alt={product.name} height={160} /> {/* Using Mantine Image component */}
          </Card.Section>
          <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
            <Text weight={500}>{product.name}</Text>
            <Badge color="pink" variant="light">
              {product.category}
            </Badge>
          </Group>
          <Text size="sm" color="dimmed">
            {product.description}
          </Text>
          <Group position="apart" style={{ marginTop: '1rem' }}>
            <Text weight={700} size="lg">{product.price}</Text>
            <Button variant="light" color="blue">
              Add to Cart
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
