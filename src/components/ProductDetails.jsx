import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Image, Text, Badge, Group, Space, Button, AspectRatio, ActionIcon } from '@mantine/core';
import classes from '../styles/Products.module.css';
import { IconHeart } from '@tabler/icons-react';

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
        <AspectRatio ratio={1 / 1}>
         <Image src={product.images} alt={product.name} h ='300' w= 'auto' fit="contain" className= {classes.productImage}/>
        </AspectRatio>
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
        <Button variant="subtle" color="cyan" radius="lg" component={Link} to='/products' > Back </Button>
        <ActionIcon className= {classes.heartIcon}
          variant="gradient"
          size="lg"
          aria-label="Gradient action icon"
          gradient={{ from: 'pink', to: 'cyan', deg: 64 }}
        >
          <IconHeart />
        </ActionIcon>

      </Card>
    )
  );
};

export default ProductDetails;
