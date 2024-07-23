import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Title,
  Group,
  Select,
  Button,
  Space,
} from '@mantine/core';


const resetInitialStates = () => ({
    username: '',
    password: '',
    email: '',
    address: '',
    phone: '',
    role: 'user',

})

//toDO: make it sign up form  pop-up instead of a new page
const SignupPage = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState(resetInitialStates);

  
const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({...prevData, [name]: value,}));
  };


const handleSubmit = async event => {
  event.preventDefault()
  const payload = formData;
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (response.ok) {
      const userData = await response.json()
      console.log("User data: ", userData)
      setFormData(resetInitialStates()) // reinitialize entries after submitting form
      navigate("/"); // navigate to ??
    }
  } catch (error) {
    console.log(error)
  }
}

const handleCancel = () => {
  navigate("/");
};

  return (
    <>
      <Title align="center" size="xl" weight={700} mb="xl"> Signup </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Username"
          name="username"
          value={formData.username}
          placeholder="Enter your username"
          onChange={handleChange}
          required       
        />
        <Space h="sm" />

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          required
          type='password'       
        />
        <Space h="sm" />

        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          required
          type='email'       
        />
        <Space h="sm" />

        <TextInput
          label="Address"
          name="address"
          value={formData.address}
          placeholder="Enter your address"
          onChange={handleChange}
          required      
        />
        <Space h="sm" />

        <TextInput
          label="Phone"
          name="phone"
          value={formData.phone}
          placeholder="Enter your phone number"
          onChange={handleChange}
          type="tel"
          required        
        />
        <Space h="sm" />

        <Select
          label="Role"
          name="role"
          value={formData.role}
          placeholder="Select your role"
          data={['admin', 'user', 'guest']}       
          onChange={(value) => setFormData((prevData) => ({ ...prevData, role: value }))}
          required
        />
        <Space h="md" />

        <Group position="apart">
          <Button type='submit' variant="filled" size="md" radius="md"> Register </Button>
          <Button type="button" variant="filled" size="md" radius="md" onClick={handleCancel}> Cancel </Button>
        </Group>
      </form>
    </>
  )
}

export default SignupPage;
