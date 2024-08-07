import React, { useState } from 'react';
import { Container, TextInput, Textarea, Button, Group, Text, Space, Title } from '@mantine/core';
import classes from '../styles/ContactPage.module.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const [formStatus, setFormStatus] = useState('');
    
      const handleChange = (event) => {
        const { name, value } =event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // toDo: Handle the form submission, i.e., sending data to our server
        console.log('Form submitted:', formData);
        setFormStatus('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      };
    
      return (
        <Container className={classes.container}>
          <Title>
            Contact Us
          </Title>
          <Space h="md" />
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextInput
              label="Name"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={classes.input}
            />
            <Space h="md" />
            <TextInput
              label="Email"
              placeholder="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={classes.input}
            />
            <Space h="md" />
            <Textarea
              label="Message"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={classes.textarea}
            />
            <Space h="md" />
            <Group position="center" className={classes.buttonGroup}>
              <Button type="submit">Send Message</Button>
            </Group>
          </form>
          {formStatus && (
            <Text className={classes.successMessage}>
              {formStatus}
            </Text>
          )}
        </Container>
      );
}
 
export default ContactPage;