import { Title, Container, Anchor } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import classes from '../styles/About.module.css';

const AboutPage = () => {
    return ( 
        <Container>
            <Title className={classes.title}> Here details of our project</Title> 
            <Anchor  href="https://github.com/najjaved/frontend-vintage-reborn" target="_blank">
                <IconBrandGithub size={18} /> Source Code 
            </Anchor>
        
        </Container>
    

);
}
 
export default AboutPage;