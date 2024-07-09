'use client'

import { useEffect, useState } from "react"
import { createProduct } from "../services/products"
import { fetchCategories } from "../services/categories"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Definir el schema de validación

const schema = z.object({
  title: z.string()
    .min(3, 'El nombre es requerido y debe tener mínimo 3 caracteres')
    .max(30, 'El nombre no debe pasar los 30 caracteres'),
  price: z.number()
    .positive('El precio debe ser mayor a cero')
    .min(1, 'El precio debe ser mínimo cero'),
  category: z.string().min(1, 'La categoría es requerida')
})

const ProductNewPage = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })

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
          {...register('title')}
          />
          {errors.title && <div className="text-red-500 mt-2">{errors.title.message}</div>}
        </div>
        <div className="mb-5">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
          <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
           {...register('price', { valueAsNumber: true })} />
          {errors.price && <div className="text-red-500 mt-2">{errors.price.message}</div>}
        </div>
        <div className="mb-5">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
          
          {/* <input type="text" id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required 
          onChange={handleChange}
          value={form.category} /> */}

          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register('category')} 
          >
            <option value="">Elija una opción</option>
            {categories.map(category => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && <div className="text-red-500 mt-2">{errors.category.message}</div>}
          {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
        </div>


        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
      </form>
    </section>
  )
}

export default ProductNewPage