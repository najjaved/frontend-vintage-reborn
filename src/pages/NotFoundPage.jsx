import { Image, Space, Title } from "@mantine/core";

const NotFoundPage = () => {
    return (<>
        <Title order={1} size="h1"> Page not found, check if you are authorized to access!</Title>
        <Space h="md" />
        <Image radius="md" w="50%" 
               src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBkeWdqNWFkbGZ1bnZ2MGNjMW81MXE0cDZ0eXl5bDVzZXo0NnpwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Ztgdn4gbXDzSgRa/giphy.webp" />
    </>
    );
}

export default NotFoundPage;