// COMENTARIOS

// console.log('Hola Javascript! 3')

/*
  Esto
  es
  un
  comentario
  de
  múltiples
  líneas
*/

// TIPOS DE DATOS (https://lenguajejs.com/javascript/)

// PRIMITIVOS: Number, String, Boolean (true, false), undefined, null, BigInt, Symbol

// NUMBER

const numero1 = 20
const numero2 = 20.50
const numero3 = -36

console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// STRING O Cadena de texto

const alumna = 'Claudia'
const alumno = "Diego"
const numero4 = "200"
const numero5 = 200

console.log(alumna)
console.log(alumno)
console.log(numero4)
console.log(numero5)

console.log(typeof alumna)
console.log(typeof alumno)
console.log(typeof numero4)
console.log(typeof numero5)

// BOOLEAN -> false o true

const tieneDescuento = true

console.log(tieneDescuento)
console.log(typeof tieneDescuento)

// UNDEFINED

let nombre

console.log(nombre)
console.log(typeof nombre)

// NULL

// let apellido0 = undefined // ❌
let apellido = null

console.log(apellido)
console.log(typeof apellido)

// BigInt (Tipo de dato primitivo)
// Symbol (Tipo de dato primitivo)

// Object (Tipo de datos no primitivos)
// Function (Tipo de datos no primitivos)
// Array (Tipo de datos no primitivos)
// Set (Tipo de datos no primitivos)
// etc.


// VARIABLES Y CONSTANTES

// ECMASCRIPT 5 === ES5
// ECMASCRIPT 6 === ES6

// var -> ES5 (Forma de declarar una variable pero no es recomendado su uso) ❌

// CONST -> ES6 (El uso de const es lo recomendado)

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijo = 15
const PI = 3.14

// edad = 33 // Uncaught TypeError: Assignment to constant variable.

console.log(edad)


// LET -> ES6 (El uso de let es lo recomendado)

let edad2 = 35 // No es obligatorio inicializarlo

edad2 = "36"
edad2 = true
edad2 = 22

console.log(edad2)
console.log(typeof edad2)

// OPERADORES MATEMÁTICOS