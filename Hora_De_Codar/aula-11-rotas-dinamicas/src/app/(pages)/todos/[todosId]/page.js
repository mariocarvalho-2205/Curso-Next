'use client'
import Link from "next/link"
import { useParams } from "next/navigation"

export default function todosId () {

    const params = useParams()
    
    
    return (
        <>
            <h1>Todo - ID {params.todosId}</h1>
            <Link href={'/todos'}>Voltar</Link>
            <Link href={`/todos/${params.todosId}/comments`}>Comentario</Link>
        </>
    )

} 