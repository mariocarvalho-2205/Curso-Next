import Link from "next/link";
const Nav = () => {
	return (
		<div>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/products">Produtos</Link>
				</li>
				<li>
					<Link href="/contact">Contatos</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
