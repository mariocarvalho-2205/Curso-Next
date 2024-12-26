import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from './MainContainer.module.css'

const MainContainer = ({ children }) => {
	return (
		<>
			<Nav />
			<div className={styles.container}>{children}</div>
			<Footer />
		</>
	);
};

export default MainContainer;
