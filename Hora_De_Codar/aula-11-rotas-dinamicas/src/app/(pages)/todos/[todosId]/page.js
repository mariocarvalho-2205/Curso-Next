import Link from "next/link"

async function getTodo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        cache: 'force-cache'
    })

    if (!response.ok) {
        throw new Error('Falha no fetch Todos!')
    }

    return response.json()
}


export default async function todosId ({params}) {

    const todo = await getTodo(params.todosId)
    
    
    return (
        <>
            <h1>Exibindo o Todo: {todo.title}</h1>
            <p>Comentario: lalala <Link href={`/todos/${params.todosId}/comments/1`}>Detalhes</Link></p>
            <p>Comentario: lelele <Link href={`/todos/${params.todosId}/comments/2`}>Detalhes</Link></p>
            <p>Comentario: lololo <Link href={`/todos/${params.todosId}/comments/3`}>Detalhes</Link></p>

            <Link href={'/todos'}>Voltar</Link>
            <Link href={`/todos/${params.todosId}/comments`}>Comentario</Link>
        </>
    )

} 