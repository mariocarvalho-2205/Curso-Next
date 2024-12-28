import Link from "next/link"

export const metadata = {
	// Título e descrição básicos
	title: {
		default: "Comentários", // Título padrão
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

export default async function comments ({params}) {

    const resolveParams = await Promise.resolve(params)
    const todo = await getTodo(resolveParams.todosId)
    
    
    return (
        <>
            <h1>Todo - comments {todo.title}</h1>
            <p>Comentario: <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link></p>
            <p>Comentario: <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link></p>
            <p>Comentario: <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link></p>
            <Link href={`/todos/${todo.id}`}>Voltar</Link>
        </>
    )

} 