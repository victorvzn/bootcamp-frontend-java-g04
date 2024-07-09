export const fetchCategories = async () => {
  const url = 'https://dummyjson.com/products/categories'

  const response = await fetch(url)

  return response.json()
}