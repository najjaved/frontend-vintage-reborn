import React, { useState, useEffect } from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5006/api/products'); // GET request
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
          </Group>
        </Card>
      ))}
    </div>
  );
};

export default ProductsComponent;
