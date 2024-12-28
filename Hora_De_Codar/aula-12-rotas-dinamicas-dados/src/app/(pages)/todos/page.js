import styles from "./styles.module.css";
import Link from "next/link";

export const metadata = {
	// Título e descrição básicos
	title: {
		default: "Todos", // Título padrão
		template: "%s | Minha Loja Online", // Template para títulos de páginas específicas
	},
	description: "A melhor loja online de produtos artesanais do Brasil",
};

export default async function todos({props}) {
	const data = await fetch("https://jsonplaceholder.typicode.com/todos");

	const todos = await data.json();

	return (
		<div className={styles.container}>
			<h1>To-do</h1>
			<ul className={styles.todolist}>
				{todos.map((todo) => (
					<li key={todo.id}>
						{todo.title} -
						<Link props={todo.title} href={`/todos/${todo.id}`}>Ver</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
