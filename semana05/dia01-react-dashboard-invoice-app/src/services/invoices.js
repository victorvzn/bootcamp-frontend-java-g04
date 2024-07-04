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

export const getInvoice = async (id) => {
  try {
    const url = `${API_URL}/invoices/${id}`

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

export const createInvoice = async (form) => {
  try {
    const url = `${API_URL}/invoices`

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('ERROR:', response.status)
    }

    const data = response.json()

    return data
  } catch(error) {
    console.log(error)
  }
}

export const updateInvoiceStatus = async (id, newStatus) => {
  const url = `${API_URL}/invoices/${id}`

  const options = {
    method: 'PUT', // PATCH === PUT (Solo en mockapi)
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status: newStatus })
  }

  const response = await fetch(url, options)
  
  const data = response.json()

  return data
}

export const deleteInvoice = async (id) => {
  try {
    const url = `${API_URL}/invoices/${id}`

    const options = {
      method: 'DELETE'
    }

    const response = await fetch(url, options)

    return response.json()
  } catch(error) {
    console.log(error)
  }
}