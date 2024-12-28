import Link from "next/link"

export async function getStaticProps(context) {
    const {params } = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);

    const todo = await data.json();

    return {
        props: { todo },
    }
}export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const data = await response.json()

    const paths = data.map((todo) => {
        return {
            params: {
                todoId: `${todo.id}`,
            }
        }
    })
    return { paths, fallback: false }
}


export default async function todosId ({ todo }) {


	
    
    return (
        <>
            <h1>Todo - ID {todos}</h1>
            <Link href={'/todos'}>Voltar</Link>
            {/* <Link href={`/todos/${params.todosId}/comments`}>Comentario</Link> */}
        </>
    )

} 