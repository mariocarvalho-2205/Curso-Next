export default function Review({ params }) {
    return (
        <>
            <h1>Produto :{params.productsId}</h1>
            <h2>Review {params.reviewId}</h2>
        </>
    )
}