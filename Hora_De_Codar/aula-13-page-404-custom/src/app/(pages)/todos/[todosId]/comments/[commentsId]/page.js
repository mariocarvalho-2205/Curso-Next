import { notFound } from 'next/navigation'

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

export default async function commentsId ({params}) {
    const resolvedParams = await Promise.resolve(params)
    const todo = await getTodo(resolvedParams.todosId)

	if (resolvedParams.commentsId > 3) {
        notFound()
    }

	console.log(resolvedParams)



    return (
        <>
            <h1>Comentário do Todo: ....</h1>
        </>
    )
}