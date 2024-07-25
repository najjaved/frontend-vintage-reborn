import React from 'react';
import { Container, Title, Space } from '@mantine/core';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = () => {
  return (
    <Container>
      <Title align="center" order={1} mt="md">
        Product Details
      </Title>
      <Space h="md" />
      <ProductDetails />
    </Container>
  );
};

export default ProductDetailsPage;
