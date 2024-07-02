const API_URL = 'https://668348284102471fa4c9a3dc.mockapi.io/api/v1'

export const fetchInvoices = async () => {
  const url = `${API_URL}/invoices`

  const response = await fetch(url)

  return response.json()
}