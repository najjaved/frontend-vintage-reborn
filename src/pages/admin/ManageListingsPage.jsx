import React, { useState, useEffect } from 'react';
import { Container, Table, Checkbox, Title, Space } from '@mantine/core';

const ManageListingsPage = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchUsers();
    fetchProducts();
  }, []);

  const handleUserFilterChange = (userId) => {
    setSelectedUser(userId);
    if (userId) {
      setFilteredUsers(products.filter(product => product.createdBy === userId));
    } else {
      setFilteredUsers([]);
    }
  };

  return (
    <Container>
      <Title order={2} align="center">Manage Listings</Title>
      <Space h="md" />

      <Checkbox
        label="Show All Products"
        checked={!selectedUser}
        onChange={() => handleUserFilterChange(null)}
      />

      {users.map(user => (
        <Checkbox
          key={user._id}
          label={user._id}
          checked={selectedUser === user._id}
          onChange={() => handleUserFilterChange(user._id)}
        />
      ))}

      <Space h="md" />
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {(selectedUser ? filteredUsers : products).map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageListingsPage;
