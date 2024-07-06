const ProductNewPage = () => {
  return (
    <section>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label for="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
          <input type="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
        </div>
        <div className="mb-5">
          <label for="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
          <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-5">
          <label for="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
          <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
      </form>
    </section>
  )
}

export default ProductNewPage