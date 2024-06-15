import fetchCountries from './services.js'
import { renderCountries, suma } from './utils.js'

let countryData = []

const searchInput = document.querySelector('.app__input')

searchInput.addEventListener('input', function (event) {
  const { value } = event.target
  const loweredValue = value.toLowerCase()

  const filteredCountries = countryData.filter(country => {
    const loweredName = country.name.common.toLowerCase()

    // TODO: RETO 01 - Adicionalmente necesitamos filtrar los paises por su capital

    return loweredName.includes(loweredValue)
  })

  renderCountries(filteredCountries)
})

// TODO: RETO 02 - Filtrar los paises por su region usando el select. Usen el evento input también.

fetchCountries()
  .then(countries => {
    console.log(countries)

    countryData = countries

    renderCountries(countries)

    // console.log(suma(9, 8))
  })