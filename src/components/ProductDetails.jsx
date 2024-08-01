import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Image, Text, Badge, Group, Space } from '@mantine/core';
import classes from '../styles/Products.module.css';

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
      <Card className= {classes.product}>
        <Card.Section>
          <Image src={product.images} alt={product.name} w="auto" content = "fit" className= {classes.productImage}/>
        </Card.Section>
        <Group position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
          <Text weight={500}>{product.name}</Text>
          <Badge color="pink" variant="light">
            {product.category}
          </Badge>
        </Group>
        <Text size="sm" c="dimmed" my="lg">
          Description: {product.description}
        </Text>
        
        <Text weight={500} size="lg" align = "left">Price: {product.price}</Text>

      </Card>
    )
  );
};

export default ProductDetails;
