import React from 'react'

// TODO: renderizar el detalle del producto

const ProductDetailPage = ({ params }) => {
  const { id } = params

  return (
    <div>ProductDetailPage: {id}</div>
  )
}

export default ProductDetailPage