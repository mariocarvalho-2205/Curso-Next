'use client'
import Link from "next/link"
import { useParams } from "next/navigation"


export default function comments () {
        const params = useParams()
    
    
    return (
        <>
            <h1>Todo - comments {params.todosId}</h1>
            <Link href={'/todos'}>Voltar</Link>
        </>
    )

} 