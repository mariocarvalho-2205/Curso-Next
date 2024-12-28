import Link from "next/link"

async function getTodo(id) {
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        cache: 'force-cache'
    })



    if (!response.ok) {
        throw new Error('Falha no fetch Todos!')
    }

    const data = await response.json()

    return data
}


export default async function todosId ({params}) {

    const resolvedParams = await Promise.resolve(params)
    

    const todo = await getTodo(resolvedParams.todosId)
    
    
    return (
        <>
            <h1>Exibindo o Todo: {todo.title}</h1>
            <p>Comentario: lalala <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link></p>
            <p>Comentario: lelele <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link></p>
            <p>Comentario: lololo <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link></p>

            <Link href={'/todos'}>Voltar</Link>
            <Link href={`/todos/${todo.id}/comments`}>Comentario</Link>
        </>
    )

} 