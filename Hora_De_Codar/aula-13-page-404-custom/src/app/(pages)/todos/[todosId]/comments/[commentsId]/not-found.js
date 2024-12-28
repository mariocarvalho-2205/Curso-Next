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


export default async function notfound() {


    


    return (
        <>
            <h1>Não foi possivel encontrar essa tarefa </h1>
        </>
    )
}