import { useState } from "react"

const App = () => {
  const DEFAULT_TODOS = [
    {
      id: '1',
      title: 'Aprender JS',
      completed: true
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: true
    },
    {
      id: '3',
      title: 'Aprender React.js + Tailwindcss',
      completed: false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Añadiendo una nueva tarea...')

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    const updatedTodos = [...todos, newTodo]

    setTodos(updatedTodos)

    setInput('')
  }

  const handleChange = (event) => {
    // Estamos capturando lo que escribimos en la caja de texto

    const value = event.target.value

    setInput(value)
  }

  const handleRemoveTodo = (event) => {
    
    const { id } = event.target.dataset
    
    console.log(id)

    const updatedTodos = todos.filter(todo => todo.id !== id)

    setTodos(updatedTodos)
    
    // console.log({ target: event.target })
    // console.log(event.target.dataset)
  }

  const handleCompleted = (event) => {
    const { id } = event.target.dataset
    const isChecked = event.target.checked

    console.log(id, isChecked)

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: isChecked
        }
      }

      return todo // Deja el objeto sin modificaciones
    })

    setTodos(updatedTodos)

    // console.log(event.target)
    // console.log(event.target.dataset)
  }

  const totalTodos = todos.length

  const completedTodos = todos.filter(todo => todo.completed).length

  const handleClearTodos = (event) => {
    const imcompletedTodos = todos.filter(todo => !todo.completed)

    setTodos(imcompletedTodos)
  }

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <h1 className="text-2xl font-bold text-center">TODO APP</h1>

      {/* {['victor', 'paul']} */}

      {/* --{input}-- */}

      <form onSubmit={handleSubmit}>
        <input
          className="w-full border my-3 p-3"
          type="text"
          placeholder="¿Qué deseas hacer hoy?"
          required
          onChange={handleChange}
          value={input}
        />
      </form>

      {/* DONE: RETO1 - Añadir una estadística de cuantas tareas estan completadas y el total de tareas */}
      {/* TODO: RETO2 - Completar la funcionalidad del botón limpiar tareas */}

      {/* Renderizado condicional */}
      {
        totalTodos > 0
          ? (
              <section className="flex justify-between items-center">
                <span className="font-bold">
                  {completedTodos} de {totalTodos}
                </span>
                <button
                  className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-700 duration-300"
                  onClick={handleClearTodos}
                >
                  Limpiar completadas
                </button>
              </section>
            )
          : (
            <div className="text-center font-medium">Agrega más tareas en la parte superior.</div>
          )
        }

      <section className="mt-8">
        <ul className="flex flex-col gap-2">
          {
            todos.map(
              function(todo) {
                return (
                  <li className="flex" key={todo.id}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      data-id={todo.id}
                      data-ejemplo='hola'
                      onChange={handleCompleted}
                      checked={todo.completed}
                    />
                    <div className="w-full flex justify-between items-center">
                      <span
                        className={todo.completed ? 'line-through' : ''}
                      >
                        {todo.title}
                      </span>
                      <button
                        className="bg-red-300 rounded-lg px-1 py-1"
                        data-id={todo.id}
                        onClick={handleRemoveTodo}
                      >
                        ❌
                      </button>
                    </div>
                  </li>
                )
              }
            )
          }
        </ul>
      </section>

      <pre>
        {JSON.stringify(todos, null, 2)}
      </pre>
    </main>
  )
}

export default App