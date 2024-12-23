import Link from "next/link";

export default function Nav() {
	return (
		<>
			<ul>
				<li>
					<Link href="/products">Produtos</Link>
				</li>
				<li>
					<Link href="/">Home</Link>
				</li>
			</ul>
		</>
	);
}
