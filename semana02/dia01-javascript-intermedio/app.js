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

// Insertar un elemento en una posición determinada

listaDeNombres.splice(1, 0, 'HTML')

console.log(listaDeNombres)

// Eliminar un elemento

listaDeNombres.splice(2, 1)

console.log(listaDeNombres)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length)
console.log('bienvenido'.length)

// Otras funciones: slice (Investiguen)

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// MÉTODOS DE ARREGLOS

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean(true o false)

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(languages.includes('java')) // true
console.log(languages.includes('cobol')) // false

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un arreglo con los resultados

const resultado = languages.filter(
  function (language) {
    // return language === 'java'
    // return language === 'python'
    return language.toLowerCase().includes('c')
  }
)

console.log(resultado)
console.log(languages)

// Método MAP, devuelve un arreglo modifica pasandole una función

const nombresConTitulo = languages.map(
  function (language) {
    // return 'Hola'
    return language + '*'
  }
)

console.log(nombresConTitulo)
console.log(languages)

// Método SORT, nos ayuda a ordenar un arreglo de elementos. Muta el arreglo original

const ordenandoLanguages = [...languages].sort()

console.log(ordenandoLanguages)
console.log(languages)

// Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningun retorno de datos

const miarreglo = []

languages.forEach(
  function (language) {
    miarreglo.push('hola--' + language)
  }
)

console.log(miarreglo)

// Método REDUCE, nos ayuda

const numeros = [3, 40, 100, 7, 50]

const sumatoria = numeros.reduce(
  function (accumulador, valorActual) {
    return accumulador + valorActual
  }, 0)

console.log(sumatoria)

// let acumulador = 0

// for (let i = 0; i < numeros.length; i++) {
//   acumulador = acumulador + numeros[i]
// }

// console.log(acumulador)

// OBJETOS

/*
  {
    KEY1: VALUE1,
    KEY2: VALUE1
  }
*/

const miObjetoVacio = {}

const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  colorFavorito: 'azúl',
  'mi edad': 37,
  coloresFavoritos: ['rosado', 'rojo', 'azúl'],
  cursos: [
    {
      nombre: 'Matemática',
      nota: 18
    },
    {
      nombre: 'Algoritmos',
      nota: 13
    }
  ],
  devolverCursosAprobados: function () {
    return this.cursos.filter(function (curso) {
      return curso.nota > 13
    })
  }
}

console.log(miObjetoVacio)
console.log(miObjeto)

// LEER LOS CAMPOS DE UN OBETO (notación de punto y de corchete)

console.log(miObjeto.nombre) // Victor
console.log(miObjeto.apellido) // Villazón
console.log(miObjeto.edad) // undefined

// console.log(miObjeto.mi edad) // BAD ❌ - Uncaught SyntaxError: missing ) after argument list 
console.log(miObjeto['mi edad'])  // OK ✅

console.log(miObjeto.coloresFavoritos)
console.log(miObjeto.coloresFavoritos[2])

console.log(miObjeto.cursos)
console.log(miObjeto.cursos[1])
console.log(miObjeto.cursos[1].nombre)
console.log(miObjeto.cursos[1].nota)
console.log(miObjeto.cursos[1]['nota'])

console.log(miObjeto.devolverCursosAprobados)
console.log(miObjeto.devolverCursosAprobados())

// ELIMINAR PROPIEDADES DE UN OBJETO

console.log(miObjeto)
delete miObjeto.colorFavorito
console.log(miObjeto)

// INSERTAR UN NUEVA PROPIEDAD A UN OBJETO

miObjeto.platilloFavorito = 'Ceviche de Conchas Negras'
miObjeto['juegos favoritos'] = ['Crash Team Racing', 'Mario', 'Minecraft']

console.log(miObjeto)

// Destructuring de arreglos, objetos

// Spread Operator



