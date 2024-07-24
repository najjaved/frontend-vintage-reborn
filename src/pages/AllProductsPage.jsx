import React, { useContext, useState } from 'react';
import { Button } from '@mantine/core';
import ProductsComponent from '../components/ProductsComponent';
import ProductForm from '../components/ProductForm';
import { SessionContext } from '../contexts/SessionContext';

const AllProductsPage = () => {
  const { isAuthenticated } = useContext(SessionContext)

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
      {/*add product button shown if user is authenticated, same should be for Edit button*/}
      {isAuthenticated && (
                <Button onClick={() => handleOpenModal(null)}>Add Product</Button>
      )}

      <ProductsComponent onEdit={handleOpenModal} />
      {isModalOpen &&  <ProductForm isOpen={isModalOpen} onClose={handleCloseModal} product={editingProduct} />}
    </>
  );
};

export default AllProductsPage;
