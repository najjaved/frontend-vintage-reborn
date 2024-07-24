import React, { useState } from 'react';
import { Button } from '@mantine/core';
import ProductsComponent from '../components/ProductsComponent';
import ProductForm from '../components/ProductForm';

const AllProductsPage = () => {
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
    <>
      <h1>All Products</h1>
      <Button onClick={() => handleOpenModal(null)}>Add Product</Button>
      <ProductsComponent onEdit={handleOpenModal} />
      <ProductForm isOpen={isModalOpen} onClose={handleCloseModal} product={editingProduct} />
    </>
  );
};

export default AllProductsPage;
