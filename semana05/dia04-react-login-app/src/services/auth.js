export const login = async ({ email, password }) => {
  const url = 'https://dummyjson.com/auth/login'

  const options = {
    method: 'POST', // PUT, DELETE, POST, GET, OPTIONS, ETC
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: email,
      password
    })
  }

  const response = await fetch(url, options)

  return await response.json()
}

export const getProducts = async (token) => {
  const url = 'https://dummyjson.com/auth/products'

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await fetch(url, options)

  return await response.json()
}