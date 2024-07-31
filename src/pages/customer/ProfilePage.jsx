import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  TextInput,
  Group,
  Button,
  Divider,
  Box,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';

const ProfilePage = () => {

  const { userId } = useParams();

  const theme = useMantineTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    phone: '',
    role: '',
  });

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`)
      const data = await response.json()
      setFormData(data)
    } catch (error) {
      console.log("Error fetching user data: ", error)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [userId])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const updatedData = await response.json()
      console.log("Updated Profile: ", updatedData)
    } catch (error) {
      console.log("Error updating profile: ", error)
    }
    // toDo: put request for editing user details with userId
    //  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/users/${userId}`)
    console.log('Updated Profile:', formData);
  };
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Container size="md" style={{ padding: theme.spacing.xl }}>
      <Title align="center" size="xl" weight={700} mb="xl">User Profile</Title>
      <Box>
        <Text align="center" size="lg" weight={500}>User Information</Text>
        <Divider my="sm" />
        <Group direction="column" spacing="md">
          <TextInput
            label="Username"
            name="username"
            value={formData.username}
            placeholder="Username"
            onChange={handleChange}
            readOnly
            style={{ width: '100%' }}
          />
          <TextInput
            label="Email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            style={{ width: '100%' }}
          />
          <TextInput
            label="Address"
            name="address"
            value={formData.address}
            placeholder="Address"
            onChange={handleChange}
            style={{ width: '100%' }}
          />
          <TextInput
            label="Phone"
            name="phone"
            value={formData.phone}
            placeholder="Phone"
            onChange={handleChange}
            style={{ width: '100%' }}
          />
          <TextInput
            label="Role"
            name="role"
            value={formData.role}
            placeholder="Role"
            onChange={handleChange}
            readOnly
            style={{ width: '100%' }}
          />
          <Group position="center" style={{ marginTop: theme.spacing.md }}>
            <Button type="submit" onClick={handleSubmit} variant="filled" size="md" radius="md" style={{ backgroundColor: theme.colors.blue[6] }}>
              Save Changes
            </Button>
            <Button onClick={handleCancel} variant="outline" size="md" radius="md" style={{ marginLeft: theme.spacing.sm }}>
              Cancel
            </Button>
          </Group>
        </Group>
      </Box>
    </Container>
  );

}

export default ProfilePage;
