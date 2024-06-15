import fetchCountries from './services.js'
import { renderCountries, suma } from './utils.js'

fetchCountries()
  .then(countries => {
    console.log(countries)

    renderCountries(countries)

    console.log(suma(9, 8))
  })