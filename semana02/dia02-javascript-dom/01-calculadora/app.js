console.log('Hola JS!')


const inputDisplay = document.querySelector('#inputDisplay') // Consulta solo un elemento a la vez
const buttons = document.querySelectorAll('button')

console.log(inputDisplay)
console.log(buttons)

// const titleH1 = document.getElementById('title')
const titleH1 = document.querySelector('#title')
// const titleH1 = document.querySelector('.mytitle')
// const titleH1 = document.querySelector('h1')
console.log(titleH1.textContent)
titleH1.textContent = 'Calculadora v1.1'