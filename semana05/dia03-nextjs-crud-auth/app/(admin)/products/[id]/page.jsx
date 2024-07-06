import React from 'react'

const ProductEditPage = ({ params }) => {
  const { id } = params

  return (
    <div>ProductEditPage: {id}</div>
  )
}

export default ProductEditPage