import Link from "next/link";

export const metadata = {
	// Título e descrição básicos
	title: {
		default: "Todo", // Título padrão
		template: "%s | Minha Loja Online", // Template para títulos de páginas específicas
	},
	description: "A melhor loja online de produtos artesanais do Brasil",
};

async function getTodo(id) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${id}`,
		{
			cache: "force-cache",
		}
	);

	if (!response.ok) {
		throw new Error("Falha no fetch Todos!");
	}

	return response.json();
}

export default async function todosId({ params }) {
    const resolvedParams = await Promise.resolve(params)
    const todo = await getTodo(resolvedParams.todosId)

	return (
		<>
			<h1>Todo - ID: {todo.title}</h1>
			<Link href={"/todos"}>Voltar</Link>
			<Link href={`/todos/${todo.id}/comments`}>Comentario</Link>
		</>
	);
}
