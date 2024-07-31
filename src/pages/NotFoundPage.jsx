import { Image, Space, Title, Container, Button, rem } from "@mantine/core";
import { IconHome } from '@tabler/icons-react';
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Container w="50%">
            <Title order={2}> Page not found, check if you are authorized to access!</Title>
            <Space h="md" />
            <Image radius="md"
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBkeWdqNWFkbGZ1bnZ2MGNjMW81MXE0cDZ0eXl5bDVzZXo0NnpwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Ztgdn4gbXDzSgRa/giphy.webp" />
            <Space h="md" />
            <Button fullWidth variant="filled" size="lg" leftSection={<IconHome style={{ width: rem(20) }} stroke={1.5} />} component={Link} to='/' >
                Back
            </Button>

        </Container>
    );
}

export default NotFoundPage;