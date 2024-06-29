import axios from "axios"

export const fetchProductsWithAxios = async () => {
  const url = 'https://dummyjson.com/products'

  const response = await axios.get(url)

  return response.data
}


// const fetchProductsWithAPIFetch = async () => {
//   const url = 'https://dummyjson.com/products'

//   const response = await fetch(url)

//   return (await response).json()
// }
