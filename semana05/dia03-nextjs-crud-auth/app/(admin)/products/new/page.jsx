'use client'

import { useState } from "react"
import { createProduct } from "../services/products"
import { redirect } from "next/navigation"

const ProductNewPage = () => {
  const INITIAL_FORM = {
    title: '',
    price: 0,
    category: ''
  }

  const [form, setForm] = useState(INITIAL_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    // TODO: implementar el envio por POST a el servicio dummyjson.com

    console.log('Saving...')

    const res = await createProduct(form)

    console.log(res)

    setForm(INITIAL_FORM)

    // redirect('/products')
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <h1 className="text-3xl font-bold mb-4">New product</h1>
        <div className="mb-5">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
          <input type="title" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required
          onChange={handleChange}
          value={form.title} />
        </div>
        <div className="mb-5">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
          <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
           onChange={handleChange}
           value={form.price} />
        </div>
        <div className="mb-5">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
          <input type="text" id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required 
          onChange={handleChange}
          value={form.category} />
        </div>
        <pre>{JSON.stringify(form)}</pre>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
      </form>
    </section>
  )
}

export default ProductNewPage