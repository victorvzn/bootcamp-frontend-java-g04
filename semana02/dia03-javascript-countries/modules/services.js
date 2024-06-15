const url = 'https://restcountries.com/v3.1/independent?fields=name,population,region,capital,languages,currencies,flags,timezones'

const fetchCountries = async () => {
  try {
    const response = await fetch(url) // Devuelve una promesa

    if (!response.ok) {
      throw new Error('ERROR', response.status)
    }

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export default fetchCountries