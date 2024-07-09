'use client'

import { useEffect, useState } from "react"
import { createProduct } from "../services/products"
import { fetchCategories } from "../services/categories"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

const ProductNewPage = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
      .then(data => setCategories(data))
  }, [])

  const handleNewProduct = async (data) => {
   
    console.log(data)

    // TODO: implementar el envio por POST a el servicio dummyjson.com

    console.log('Saving...')

    const res = await createProduct(data)

    console.log(res)

    router.push('/products')
  }

  return (
    <section>
      <form onSubmit={handleSubmit(handleNewProduct)} className="max-w-sm mx-auto">
        <h1 className="text-3xl font-bold mb-4">New product</h1>
        <div className="mb-5">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
          <input type="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=""
          {...register('title', { required: true })}
          />
          {errors.title && <div className="text-red-500 mt-2">Title is required</div>}
        </div>
        <div className="mb-5">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
           {...register('price', { required: true })} />
        </div>
        <div className="mb-5">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
          
          {/* <input type="text" id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required 
          onChange={handleChange}
          value={form.category} /> */}

          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register('category', { required: true })} 
          >
            <option value="">Elija una opción</option>
            {categories.map(category => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
          {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
        </div>


        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
      </form>
    </section>
  )
}

export default ProductNewPage