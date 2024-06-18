// COMPONENTE USANDO FUNCTIO

// function App() {
//   return (
//     <h1>Hola React.js</h1>
//   )
// }

// export default App

// COMPONENTE USANDO ARROW FUNCTIONS

// const App = () => {
//   return (
//     <h1>Hola React con arrow functions</h1>
//   )
// }

// COMPONENTES DE REACT USANDO MÚLTIPLES LÍNEAS CON SU ELEMENTO PADRE

// const App = () => {
//   return (
//     <section>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//     </section>
//   )
// }

// COMPONENTES DE REACT USANDO MÚLTIPLES LÍNEAS CON UN FRAGMENT

// import React from "react"

// const App = () => {
//   return (
//     <>
//       <h1 className="text-color-red">Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//     </>
//   )
// }

// EXTENSIONES NECESARIAS PARA USAR REACT + VSCODE

// ES7+ React/Redux/React-Native snippets
// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

// SNIPPETS PARA CREAR COMPONENTES

// RFCE Y RFC

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// ANIDANDO COMPONENTES DENTRO DE OTROS

// function Saludo() {
//   return <h4>Hola Victor</h4>
// }

// function Despedida() {
//   return <h4>Adios Victor</h4>
// }

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>

//       <Saludo />
//       <Despedida />
//     </>
//   )
// }

// IMPORTANDO COMPONENTES EXTERNOS y USANDO EXPRESIONES CON JSX {}

import Despedida from "./components/Despedida"
import Saludo from "./components/Saludo"
import { LISTA_DE_FRUTAS, EDAD } from './components/frutas.js'

const App = () => {
  const nombre = 'Victor'

  return (
    <>
      <h1>Hola React!</h1>
      <p>Estoy en el bootcamp!</p>

      {/* Comentario en React dentro de JSX */}

      {1 + 2}

      {`HOLA ${nombre}`}

      {LISTA_DE_FRUTAS}

      {EDAD}

      <Saludo />
      <Despedida />
    </>
  )
}

export default App