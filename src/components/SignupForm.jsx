import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Group,
  Select,
  Button,
  Space,
  Grid,
  Divider,
  Textarea,
  useMantineTheme,
  Modal,
} from '@mantine/core';

const resetInitialStates = () => ({
  username: '',
  password: '',
  email: '',
  address: '',
  phone: '',
  role: 'user',

})

const SignupForm = ({ isOpen, onClose }) => {

  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(resetInitialStates);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value, }));
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
        onClose(); // Close the form on successful signup
        navigate("/"); // navigate to ??
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleCancel = () => {
    onClose(); //form closes on cancel
    navigate("/");
  };

  return (
    <Modal opened={isOpen} onClose={onClose} title='Sign Up'>
      <form onSubmit={handleSubmit}>
        <Grid grow gutter="xl"> {/*grow prop to fill the remaining space in the row, gutter prop to control spacing between columns*/}
          <Grid.Col span={6}> {/* 50% of row width */}
            <TextInput
              label="Username"
              name="username"
              value={formData.username}
              placeholder="Enter your username"
              onChange={handleChange}
              required
              style={{ marginBottom: theme.spacing.sm, }}
            />
            <Space h="md" />

            <PasswordInput
              label="Password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
              type='password'
            />
            <Space h="md" />

            <TextInput
              label="Email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
              type='email'
            />
            <Space h="md" />
          </Grid.Col>

          <Grid.Col span={6}>
            <Textarea
              label="Address"
              name="address"
              value={formData.address}
              placeholder="Enter your address"
              onChange={handleChange}
              required
              rows={5}
              cols={25}
            />
            <Space h="md" />

            <TextInput
              label="Phone"
              name="phone"
              value={formData.phone}
              placeholder="Enter your phone number"
              onChange={handleChange}
              type="tel"
            />
            <Space h="md" />

            <Select
              label="Role"
              name="role"
              value={formData.role}
              placeholder="Select your role"
              data={['customer', 'admin']}
              defaultValue="customer"
              clearable
              onChange={(value) => setFormData((prevData) => ({ ...prevData, role: value }))}
            />
          </Grid.Col>
        </Grid>
        <Divider my="lg" />

        <Group position="center">
          <Button type='submit' size="md" radius="md"> Register </Button>
          <Button type="button" size="md" radius="md" onClick={handleCancel}> Cancel </Button>
        </Group>
      </form>
    </Modal>
  )
}

export default SignupForm;