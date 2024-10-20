import { notFound } from 'next/navigation'

const products = ({ params}) => {

    if (params.productsIs > 5) {
        notFound()
    }
    
  return (
    <div>
        <h1>products {params.productsIs}</h1>
    </div>
  )
}

export default products