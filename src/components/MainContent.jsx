import React, { useState, useEffect }  from 'react';
import { Container, Text, useMantineTheme, Skeleton, Title, Stack  } from '@mantine/core';
import styles from '../styles/MainContent.module.css';

const MainContent = () => {
  const theme = useMantineTheme();
  const secondaryColor =
      theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const [data, setData] = useState(null);

  // Simulate fetching data
  useEffect(() => {
    setTimeout(() => {
      setData({
        title: 'Welcome to Our Store',
        description: 'This is a placeholder description while the data is loading.'
      });
    }, 3000); // Simulate a 3-second loading period
  }, []);

  return (
    <Container className={styles.container} style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
       {data ? (
        <Stack>
          <Title weight={700} size="xl"style={{ color: secondaryColor, lineHeight: 1.5 }} > {data.title} </Title>
          <Text>{data.description}</Text>
        </Stack>
      ) : (
        <Stack>
          <Skeleton height={40} animate={true} />
          <Skeleton height={20} width="80%" animate={true} />
          <Skeleton height={20} width="60%" animate={true} />
        </Stack>
      )}
    </Container>
  );
};

export default MainContent;
