import React, { useContext, useState } from 'react';
import { Button, Space, Title, Container } from '@mantine/core';
import ProductsComponent from '../components/ProductsComponent';
import ProductForm from '../components/ProductForm';
import { SessionContext } from '../contexts/SessionContext';
import classes from '../styles/Products.module.css';


const AllProductsPage = () => {
  const { isAuthenticated } = useContext(SessionContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleOpenModal = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  return (
    <Container className={classes.productsContainer}>
      <Title order = {1} className = {classes.title}>All Products</Title>
      <Space h="md" />
      {/*add product button shown if user is authenticated, same should be for Edit button*/}
      {isAuthenticated && (
        <Button onClick={() => handleOpenModal(null)}>Add Product</Button>
      )}
      <Space h="xl" />
      <ProductsComponent onEdit={handleOpenModal} />
      {isModalOpen && <ProductForm isOpen={isModalOpen} onClose={handleCloseModal} product={editingProduct} />}
    </Container>
  );
};

export default AllProductsPage;
