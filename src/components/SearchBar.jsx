import React, { useState, useEffect } from 'react';
import { TextInput, List, ListItem, Modal, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ products, icon }) => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query === '') {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, products]);

  const handleProductClick = (productId) => {
    setIsModalOpen(false);
    navigate(`/products/${productId}`);
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} style={{ padding: 0, border: 'none', background: 'none' }}>
        <Image src={icon} alt="Search" width={24} height={24} />
      </Button>
      <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title="Search Products">
        <TextInput
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          placeholder="Search for products..."
        />
        <List>
          {filteredProducts.map((product) => (
            <ListItem
              key={product._id}
              onClick={() => handleProductClick(product._id)}
              style={{ cursor: 'pointer' }}
            >
              {product.name}
            </ListItem>
          ))}
        </List>
      </Modal>
    </>
  );
};

export default SearchBar;
