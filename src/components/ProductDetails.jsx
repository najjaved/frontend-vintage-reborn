import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Image, Text, Badge, Group, Space } from '@mantine/core';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    product && (
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src={product.images} alt={product.name} height={300} />
        </Card.Section>
        <Group position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
          <Text weight={500}>{product.name}</Text>
          <Badge color="pink" variant="light">
            {product.category}
          </Badge>
        </Group>
        <Text size="sm" color="dimmed">
          {product.description}
        </Text>
        <Space h="md" />
        <Group position="apart" style={{ marginTop: '1rem' }}>
          <Text weight={700} size="lg">{product.price}</Text>
        </Group>
      </Card>
    )
  );
};

export default ProductDetails;
