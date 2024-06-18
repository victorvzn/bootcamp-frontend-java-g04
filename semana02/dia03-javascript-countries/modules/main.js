import fetchCountries, { getByRegion } from './services.js'
import { renderCountries, suma } from './utils.js'

let countryData = []

const searchInput = document.querySelector('.app__input')
const filterSelect = document.querySelector('.app__filter')

searchInput.addEventListener('input', function (event) {
  const { value } = event.target
  const loweredValue = value.toLowerCase()

  const filteredCountries = countryData.filter(country => {
    const loweredName = country.name.common.toLowerCase()

    // TODO: RETO 01 - Adicionalmente necesitamos filtrar los paises por su capital
    const loweredCapital = country.capital.join(', ').toLowerCase()

    return loweredName.includes(loweredValue) || loweredCapital.includes(loweredValue)
  })

  renderCountries(filteredCountries)
})

// TODO: RETO 02 - Filtrar los paises por su region usando el select. Usen el evento input también.

filterSelect.addEventListener('input', async function (event) {
  const { value } = event.target

  // console.log(value)

  const countries = await getByRegion(value)

  // console.log(countries)

  renderCountries(countries)
})

fetchCountries()
  .then(countries => {
    console.log(countries)

    countryData = countries

    renderCountries(countries)

    // console.log(suma(9, 8))
  })