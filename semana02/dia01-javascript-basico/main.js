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

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2) // Residuo
console.log(2 ** 3) // Dos elavado al cubo
console.log(Math.pow(2, 3)) // Hace lo mismo que 2 ** 3

// OPERADORES DE ASIGNACIÓN

const genero = 'femenino'

console.log(genero + '*')

// OPERADORES DE COMPARACIÓN

// Operador de igualdad y desigualdad no estricta (==)
// Devuelve un valor booleano (true o false)
// Este operador no toma en cuenta el tipo de datos al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true ❓
console.log(1 != '1') // false ❓

// Operador de igualdad y desigualdad estricta (===) (ES RECOMDABLE USARLO CASI SIEMPRE)
// Devuelven un valor booleano (true o false)
// Este oprador si toma en cuenta el tipo de datos y sus valores al comparar

console.log(1 === 1) // true
console.log(1 === '1') // false ✅
console.log(1 !== '1') // true ✅

// OPRARDORES DE COMPARACIÓN, siempre devuelven un booleano

console.log(8 > 5)
console.log(5 < 1)
console.log(8 >= 5)
console.log(8 <= 5)

// OPERADORES LÓGICOS (AND, OR, NEGACIÓN)

console.log(true && false) // AND
console.log(true || false) // OR
console.log(!false) // NEGACIÓN

// OPERADOR DE CADENA (CONCATENACIÓN)

const saludo = 'Hola, '
const nombreCompleto = 'Victor' + ' ' + 'Villazón'
const miEdad = 38

const imprimirSaludo = saludo + nombreCompleto + ". Tengo " + miEdad + ' años'

console.log(nombreCompleto)
console.log(imprimirSaludo)


// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false
const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length) // true

// 2. Retornar true si un numero es menor que 40 sino devolver false
// 3. Retornar True si un numero es menor que 60 sino devolver False
// 4. Retornar True si un numero es par sino devolver False
// 5. Retornar True si un numero es impar sino devolver False
// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%