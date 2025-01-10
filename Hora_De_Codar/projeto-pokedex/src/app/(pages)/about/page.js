import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
	return (
		<div className={styles.about}>
			<h1>Sobre o projeto</h1>
			<p>Projeto realizado como conclusão do curso de Next.js</p>
			<Image
				src="/images/charizard.png"
				width={300}
				height={300}
				alt="Charizard"
			/>
		</div>
	);
};

export default About;
