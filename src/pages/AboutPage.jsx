

const AboutPage = () => {
    return (
        <> <h1> The team</h1>
            <div className="aboutCards">
                <div className="santiago">
                    <h3>Santiago</h3>
                    <img className="santi" src="src/assets/images/file.jpeg" />
                    <p>On my late 20s, nature lover and close to be FullStack Web Developer. Born and grown in Canary Islands, with experience working or studying in Great Britain, Poland and Romania. For more info click <a>HERE</a></p>
                </div>
                <div className="najma">
                    <h3>Najma</h3>
                    <img className="naj" src="src/assets/images/Najma.jpeg" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eum, accusantium doloribus error perspiciatis dicta dolorum quis. Unde odit autem praesentium, dolorem corporis eveniet quidem sed corrupti soluta, asperiores deleniti <a >HERE</a></p>
                </div>
                <div className="omid">
                    <h3>Omid</h3>
                    <img className="om" src="src/assets/images/Omid.png" />
                    <p>I am a doctoral researcher in the field of engineering from Iran. Currently, I am attending the Ironhack bootcamp to develop my skills and transition into a full-stack developer role. With a solid foundation in engineering and a passion for technology, I am excited to combine my research expertise with new programming and development skills. For more info click <a href="https://www.linkedin.com/in/omidesmaeelipoor/">HERE</a></p>
                </div>
            </div>
        </>);
}

export default AboutPage;