import Image from "next/image"
import Link from "next/link";

import { TbEdit } from "react-icons/tb";
import { TbTrash } from "react-icons/tb";
import { TbEye } from "react-icons/tb";

const fetchProducts = async () => {
  const url = 'https://dummyjson.com/products?limit=5&skip=0'

  const response = await fetch(url)

  return await response.json()
}

const ProductsPage = async () => {
  const { products } = await fetchProducts()

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
          Our products
          <p className="mt-1 text-sm font-normal text-gray-500">
            Browse a list of products designed to help you work and play and more.
          </p>
          <Link href="/products/new">
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              New Product
            </button>
            </Link>
        </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Renderizar los productos en esta tabla */}
            {products.map(product => {
              return (
                <tr
                  className="bg-white border-b"
                  key={product.id}
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <Image
                      src={product.thumbnail}
                      width={96}
                      height={96}
                    />
                  </th>
                  <td className="px-6 py-4">
                    {product.title}
                  </td>
                  <td className="px-6 py-4">
                    
                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded capitalize">{product.category}</span>
                  </td>
                  <td className="px-6 py-4 text-lg font-bold">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex gap-3">
                      <Link href={`/products/${product.id}/detail`} className="font-medium text-amber-600 hover:underline">
                        <TbEye size="1.5rem" />
                      </Link>
                      <Link href={`/products/${product.id}/edit`} className="font-medium text-blue-600 hover:underline">
                        <TbEdit size="1.5rem" />
                      </Link>
                      <Link href="#" className="font-medium text-red-600 hover:underline">
                        <TbTrash size="1.5rem" />
                      </Link>
                    </div>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsPage