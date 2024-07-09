export const fetchProducts = async () => {
  const url = 'https://dummyjson.com/products?limit=5&skip=0'

  const response = await fetch(url)

  return await response.json()
}

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

export const getProduct = async (id) => {
  const url = `https://dummyjson.com/products/${id}`

  const response = await fetch(url)

  return response.json()
}

export const updateProduct = async (id, data) => {
  const url = `https://dummyjson.com/products/${id}`

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer TOKEN_JWT'
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(url, options)

  return response.json()
}