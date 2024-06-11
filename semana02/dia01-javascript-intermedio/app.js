// TIPOS DE DATOS NO PRIMITIVOS

// ARRAYS

// Un arreglo tiene elemento de cualquier tipo de dato: cadena, números, boolean, null, arrays, objetos, etc...

const arregloVacio = []
const listaDeNombres = ['Victor', 'Liliana', 'Marcial', 'Diego']
const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', true, null, undefined]

console.log(arregloVacio)
console.log(listaDeNombres)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[4]) // Villazón
console.log(listaDeValores[5]) // true
console.log(listaDeValores[100]) // undefined

// Escritura en un arreglo

listaDeNombres[2] = 'Paul'
listaDeNombres[0] = 9999

console.log(listaDeNombres)

// Insertar nuevos elementos en un arreglo al final

listaDeNombres.push('Javascript')

console.log(listaDeNombres)

// Remover elementos del final del arreglo

listaDeNombres.pop()

console.log(listaDeNombres)

// Eliminar un elemento

listaDeNombres.splice(2, 1)

console.log(listaDeNombres)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length)
console.log('bienvenido'.length)

// Otras funciones: slice (Investiguen)

// MÉTODOS DE ARREGLOS





// OBJETOS

// Destructuring de arreglos, objetos

// Spread Operator



