import React from 'react'

const details = ({ params}) => {
  return (
    <div>
      <p>Produto {params.productsId}</p>
      <p>Rewiew {params.reviewId}</p>
      <p>Detalhes {params.detailsId}</p>
    </div>
  )
}

export default details