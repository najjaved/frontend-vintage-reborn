import React from 'react';
import { Card, Text, Button, Group, Container, Title } from '@mantine/core';


const CartComponent = ({product}) => {

  return (
    <Container>
      <Card shadow="sm" padding="lg" mb="md">
        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Text weight={500}>Product Name</Text>
          <Text>$0.00</Text>
        </Group>
        <Text size="sm" c="dimmed">
          Product description goes here.
        </Text>
        <Group position="apart" style={{ marginTop: '1rem' }}>
          <Button variant="light" color="blue">
            Remove
          </Button>
          <Text weight={700} size="lg">$0.00</Text>
        </Group>
      </Card>
      <Button fullWidth size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default CartComponent;
