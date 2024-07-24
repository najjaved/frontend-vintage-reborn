import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Button, 
  PasswordInput, 
  TextInput, 
  Space, 
  Group,
  Divider, 
  Modal
} from "@mantine/core";


const LoginPage = ({isOpen, onClose}) => {
  const { setToken } = useContext(SessionContext)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

const handleSubmit = async event => {
    event.preventDefault()
    const payload = formData
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setToken(data.token) // object with token property, check how is it named on BE
        onClose(); // Close the form on successful login
      }
    } catch (error) {
      console.log(error)
    }
  }

// toDo: move handleChange and handleCancel into helper functions
const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({...prevData, [name]: value,}));
  };

  const handleCancel = () => {
    onClose(); 
    navigate("/");
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
          <Button type="submit" color="blue"> Login </Button>
          <Button type="button" onClick={handleCancel}> Cancel </Button>
        </Group>
      </Box>
    </Modal>
    </>
  )
}

export default LoginPage;