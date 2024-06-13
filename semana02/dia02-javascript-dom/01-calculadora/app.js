console.log('Hola JS!')

let numeroActual = '0'
let operador = ''
let operando = ''

const inputDisplay = document.querySelector('#inputDisplay') // Consulta solo un elemento a la vez
const buttons = document.querySelectorAll('.button')

// EVENTOS

buttons.forEach(function (button) {

  button.addEventListener('click', function (event) {
    // console.log('Hice click!')
    // console.log(event)
    // console.log(event.target.textContent)

    const button = event.target
    const buttonText = button.textContent

    // console.log(buttonText)

    if ('+-*'.includes(buttonText)) {
      // 1. Accionamos el operador
      operador = buttonText
      operando = Number(numeroActual)
      numeroActual = '0'
    } else if (buttonText === '=') {
      // 3. Aquí realizo las operaciones matemáticas en base al número actual y el operando
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    } else if (buttonText === 'AC') {
      // Limpiamos operando, operadores y el input
      numeroActual = '0'
      operador = ''
      operador = ''
    } else {
      // 2. Se preseonó algún número
      numeroActual = Number(numeroActual + buttonText)
    }

    inputDisplay.value = numeroActual
  })
})

// console.log(inputDisplay)
// console.log(buttons)
// inputDisplay.value = '992299'




// const titleH1 = document.getElementById('title')
const titleH1 = document.querySelector('#title')
// const titleH1 = document.querySelector('.mytitle')
// const titleH1 = document.querySelector('h1')
console.log(titleH1.textContent)
titleH1.textContent = 'Calculadora v1.1'