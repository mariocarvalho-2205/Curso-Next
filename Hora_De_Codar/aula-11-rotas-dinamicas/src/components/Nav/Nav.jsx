import Link from "next/link";
import styles from './Nav.module.css'
const Nav = () => {
	return (
		<div >
			<ul className={styles.navbar}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/products">Produtos</Link>
				</li>
				<li>
					<Link href="/todos">Todo</Link>
				</li>
				<li>
					<Link href="/contact">Contatos</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
