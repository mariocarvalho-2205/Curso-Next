import Link from "next/link";

async function getComments(id) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${id}`,
		{
			cache: "force-cache",
		}
	);

	if (!response.ok) {
		throw new Error("Falha no fetch Comments!");
	}

	return response.json();
}

export default async function comments({ params }) {
	const resolvedParams = await Promise.resolve(params);

	const todo = await getComments(resolvedParams.todosId);

	return (
		<>
			<h1>Todo - comments: {todo.title}</h1>

			<Link href={`/todos/${todo.id}`}>Voltar</Link>
		</>
	);
}
