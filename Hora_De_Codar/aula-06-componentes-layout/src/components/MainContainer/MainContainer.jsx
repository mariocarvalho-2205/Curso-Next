import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const MainContainer = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
};

export default MainContainer;
