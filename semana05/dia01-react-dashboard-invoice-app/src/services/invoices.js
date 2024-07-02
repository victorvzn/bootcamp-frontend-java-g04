const API_URL = 'https://668348284102471fa4c9a3dc.mockapi.io/api/v1'

export const fetchInvoices = async () => {
  try {
    const url = `${API_URL}/invoices`

    const response = await fetch(url)

    if (response.status === 400) {
      throw new Error('4XX:', response.status)
    }

    if (!response.ok) {
      throw new Error('ERROR:', response.status)
    }

    return response.json()
  } catch(error) {
    console.log(error)
  }
}