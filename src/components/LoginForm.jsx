import { useContext, useState } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Button, 
  PasswordInput, 
  TextInput, 
  Space, 
  Group,
  Divider, 
  Modal,
  Text
} from "@mantine/core";
import SignupForm from './SignupForm'; // Import SignupForm

const LoginForm = ({ isOpen, onClose }) => {
  const { setToken } = useContext(SessionContext);
  const navigate = useNavigate();
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const payload = formData;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        onClose(); // Close the form on successful login
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
  };

  const handleCancel = () => {
    onClose();
    navigate("/");
  };

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  return (
    <>
      <Modal opened={isOpen} onClose={onClose} title='Log In'>
        <Box component="form" onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            name="username"
            placeholder="Enter your username"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <Space h="sm" />
          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <Divider my="lg" />
          <Group position="center">
            <Button type="submit" color="blue">Login</Button>
            <Button type="button" onClick={handleCancel}>Cancel</Button>
          </Group>
          <Space h="sm" />
          <Text align="center">
            Don't have an account?{' '}
            <Button variant="subtle" onClick={handleOpenSignUp}>
              Sign Up
            </Button>
          </Text>
        </Box>
      </Modal>
      {isSignUpOpen && <SignupForm isOpen={isSignUpOpen} onClose={handleCloseSignUp} />}
    </>
  );
};

export default LoginForm;
