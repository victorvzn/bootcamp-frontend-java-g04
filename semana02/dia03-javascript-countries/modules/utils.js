export const renderCountries = (countries = []) => {
  // console.log('Estoy en la función renderCountries', countries)

  // TODO: RETO03 - Formatear el campo population usando separadores de miles.
  // Ayuda: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    countryList += `
      <article class="country">
        <img class="country__flag" src="${country.flags.png}" />

        <div class="country__wrapper">
          <h2>${country.name.common}</h2>
          <div class="country__description">
            <strong>Population:</strong> ${country.population}
          </div>
          <div class="country__description">
            <strong>Region:</strong> ${country.region}
          </div>
          <div class="country__description">
            <strong>Capital:</strong> ${country.capital.join(', ')}
          </div>
        </div>
      </article>
    `
  })

  countryListElement.innerHTML = countryList
}

export const suma = (num1, num2) => {
  return num1 + num2
}