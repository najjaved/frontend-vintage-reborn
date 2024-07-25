import { Title } from "@mantine/core";

const AboutPage = () => {
    return (
        <> <Title> The team</Title>
            <div className="aboutCards">
                <div className="santiago">
                    <h3>Santiago</h3>
                    <img className="santi" src="src/assets/images/file.jpeg" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet porro error ut doloremque. Tempora amet voluptatibus recusandae, necessitatibus, laboriosam quisquam modi ipsum, cum voluptatem optio consequuntur animi odio quod reiciendis!</p>
                </div>
                <div className="najma">
                    <h3>Najma</h3>
                    <img className="naj" src="src/assets/images/Najma.jpeg" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eum, accusantium doloribus error perspiciatis dicta dolorum quis. Unde odit autem praesentium, dolorem corporis eveniet quidem sed corrupti soluta, asperiores deleniti.</p>
                </div>
                <div className="omid">
                    <h3>Omid</h3>
                    <img className="om" src="src/assets/images/Omid.png" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eum, accusantium doloribus error perspiciatis dicta dolorum quis. Unde odit autem praesentium, dolorem corporis eveniet quidem sed corrupti soluta, asperiores deleniti.</p>
                </div>
            </div>
        </>);
}

export default AboutPage;