import styles from "./styles.module.css";

export const metadata = {
	// Título e descrição básicos
	title: {
		default: "Todos", // Título padrão
		template: "%s | Minha Loja Online", // Template para títulos de páginas específicas
	},
	description: "A melhor loja online de produtos artesanais do Brasil",
};

export default async function todos() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  
  const todos = await data.json();
  
	return (
		<div className={styles.container}>
			<h1>To-do</h1>
			<ul className={styles.todolist}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
		</div>
	);
}
