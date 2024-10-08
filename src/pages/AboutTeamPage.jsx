import { Card, Title, Image, Text, Badge, Group, Space, Flex } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from '../styles/About.module.css';
import najma from "../assets/images/Najma.jpeg";
import omid from "../assets/images/Omid.png"
import santi from "../assets/images/file.jpeg"

const AboutTeamPage = () => {
    return (
        <>  <Title fw={500}> The team</Title>
            <Space h="xl" />
            <Flex className={classes.aboutContainr}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image className={classes.cardImage}
                            src={santi}
                            alt="Santi"
                        />
                    </Card.Section>
                    <Group mt="md" mb="xs">
                        <Text fw={500}>Santiago</Text>
                        <Badge color="blue" component={Link} to="#" target="_blank" rel="noopener noreferrer" className= {classes.aboutLink}>LinkedIn</Badge>
                    </Group>
                    <Text>On my late 20s, nature lover and close to be FullStack Web Developer. Born and grown in Canary Islands, with experience working or studying in Great Britain, Poland and Romania. </Text>
                </Card>
                <Space h="md" />

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image  className={classes.cardImage}
                            src={najma}
                            alt="Najma"
                        />
                    </Card.Section>
                    <Group mt="md" mb="xs">
                        <Text fw={500}>Najma</Text>
                        <Badge color="blue" component={Link} to="https://de.linkedin.com/in/najaved" target="_blank" rel="noopener noreferrer" className= {classes.aboutLink}>LinkedIn</Badge>
                    </Group>
                    <Text>Electrical Engineering, Masters, HiL Test Engineer, a travel
                        enthusiast and a nature lover </Text>
                </Card>
                <Space h="md" />

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image className={classes.cardImage}
                            src={omid}
                            alt="Omid"
                        />
                    </Card.Section>
                    <Group mt="md" mb="xs">
                        <Text fw={500}>Omid</Text>
                        <Badge color="blue" component={Link} to="https://www.linkedin.com/in/omidesmaeelipoor/" target="_blank" rel="noopener noreferrer" className= {classes.aboutLink}>LinkedIn</Badge>
                    </Group>
                    <Text>I am a doctoral researcher in the field of engineering from Iran. Currently, I am attending the Ironhack bootcamp to develop my skills and transition into a full-stack developer role. With a solid foundation in engineering and a passion for technology, I am excited to combine my research expertise with new programming and development skills. </Text>
                </Card>
            </Flex>
        </>);
}

export default AboutTeamPage;