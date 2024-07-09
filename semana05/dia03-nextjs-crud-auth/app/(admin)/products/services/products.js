export const createProduct = async (data) => {
  const url = 'https://dummyjson.com/products/add'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer TOKEN_JWT'
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(url, options)

  return response.json()
}