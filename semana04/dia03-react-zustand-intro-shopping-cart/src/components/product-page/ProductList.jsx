import { useEffect, useState } from "react"
import { fetchProductsWithAxios } from "../../services/products"

import ProductItem from "./ProductItem"

const ProductList = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    // Se ejecuta este useEffect la primera vez

    // fetchProductsWithAPIFetch()
    fetchProductsWithAxios()
      .then(data => setProductList(data.products))
  }, [])

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* TODO: Listar los nombres de los productos desde el estado productList */}

      {productList.map(product => (
        <ProductItem
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          thumbnail={product.thumbnail}
        />
      ))}

      {/* <pre>{JSON.stringify(productList, null, 2)}</pre> */}
    </section>
  )
}

export default ProductList