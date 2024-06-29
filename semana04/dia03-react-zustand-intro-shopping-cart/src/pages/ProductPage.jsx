import ProductHeader from "../components/product-page/ProductHeader"
import ProductList from "../components/product-page/ProductList"

const ProductPage = () => {
  return (
    <>
      <ProductHeader />

      <main className="container py-4 px-6 mx-auto border mt-20">
        <ProductList />
      </main>
    </>
  )
}

export default ProductPage