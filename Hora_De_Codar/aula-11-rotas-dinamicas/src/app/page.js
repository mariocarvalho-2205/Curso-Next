import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<div className={styles.page}>
				<h1>Home</h1>
				<Image src="/images/city.jpg" width="300" height="600" alt="Cidade a noite"/>
			</div>
		</>
	);
}
