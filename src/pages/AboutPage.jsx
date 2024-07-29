import { Card, Title, Container, Image, Text, Badge, Group, Space } from "@mantine/core";
import { Link } from "react-router-dom";

//toDo: use css modules and mantine for styling, to be consistent with rest of the project
const AboutPage = () => {
    return (
        <>  <Title fw={500}> The team</Title>
            <Space h="xl" />
            <Container className="aboutCards"> 
                <Card className="santiago" shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src="src/assets/images/file.jpeg"
                        h="auto"
                        alt="Santi"
                        />
                    </Card.Section>
                    <Group mt="md" mb="xs">
                        <Text fw={500}>Santiago</Text>
                        <Badge color="blue" component={Link} href="#" target="_blank" rel="noopener noreferrer">LinkedIn</Badge>
                    </Group>
                    <Text>On my late 20s, nature lover and close to be FullStack Web Developer. Born and grown in Canary Islands, with experience working or studying in Great Britain, Poland and Romania. For more info click </Text>
                </Card>
                <Space h="md" />
                
                <Card className="najma" shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src="src/assets/images/Najma.jpeg"
                        h="auto"
                        padding = "sm"
                        alt="Najma"
                        />
                    </Card.Section>
                    <Group mt="md" mb="xs">
                        <Text fw={500}>Najma</Text>
                        <Badge color="blue" component={Link} href="https://de.linkedin.com/in/najaved" target="_blank" rel="noopener noreferrer">LinkedIn</Badge>
                    </Group>
                    <Text>Electrical Engineering, Masters, HiL Test Engineer, a travel
                    enthusiast and a nature lover </Text>
                </Card>
                <Space h="md" />
                
                <Card className="omid" shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src="src/assets/images/Omid.png"
                        h="auto"
                        padding = "sm"
                        alt="Najma"
                        />
                    </Card.Section>
                    <Group mt="md" mb="xs">
                        <Text fw={500}>Omid</Text>
                        <Badge color="blue" component={Link} href="https://www.linkedin.com/in/omidesmaeelipoor/" target="_blank" rel="noopener noreferrer">LinkedIn</Badge>
                    </Group>
                    <Text>I am a doctoral researcher in the field of engineering from Iran. Currently, I am attending the Ironhack bootcamp to develop my skills and transition into a full-stack developer role. With a solid foundation in engineering and a passion for technology, I am excited to combine my research expertise with new programming and development skills. </Text>
                </Card>
            </Container>
        </>);
}

export default AboutPage;