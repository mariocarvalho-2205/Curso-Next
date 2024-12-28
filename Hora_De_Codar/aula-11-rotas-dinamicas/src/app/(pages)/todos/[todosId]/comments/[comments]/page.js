'use client'
import Link from "next/link"

import { useParams } from "next/navigation"

export default function commentsId() {

    const params = useParams()
    

    return (
        <>
            <h1>Comments: {params.todosId} - {params.comments}</h1>
            <Link href={`/todos/${params.todosId}`}>Voltar</Link>

        </>
    )
}