import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  Box, Title, 
  Button, 
  PasswordInput, 
  TextInput, 
  Space, 
  Group,
  Divider 
} from "@mantine/core";


const LoginPage = () => {
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
    navigate("/");
  };

return (
    <>
    <Container size="xs" >
      <Title align="center" size="xl" weight={700} mb="xl">
        Sign In
      </Title>
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
    </Container>
    </>
  )
}

export default LoginPage;