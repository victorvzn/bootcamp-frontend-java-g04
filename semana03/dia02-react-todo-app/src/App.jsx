import { useState } from "react"

import TodoHeader from "./components/TodoHeader"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoStats from "./components/TodoStats"

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

  const handleClearTodos = () => {
    const imcompletedTodos = todos.filter(todo => !todo.completed)

    setTodos(imcompletedTodos)
  }

  const handleSubmit = (newTodo) => {
    const updatedTodos = [...todos, newTodo]

    setTodos(updatedTodos)
  }

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <TodoHeader title='TODO APP v0.2.0' />

      {/* {['victor', 'paul']} */}

      {/* --{input}-- */}

      <TodoForm
        onSubmit={handleSubmit}
      />

      {/* DONE: RETO1 - Añadir una estadística de cuantas tareas estan completadas y el total de tareas */}
      {/* DONE: RETO2 - Completar la funcionalidad del botón limpiar tareas */}

      {/* Renderizado condicional */}
      {
        todos.length > 0
          ? (
              <TodoStats
                todos={todos}
                onClearTodos={handleClearTodos}
              />
            )
          : (
            <div className="text-center font-medium">Agrega más tareas en la parte superior.</div>
          )
        }

      <section className="mt-8">
        <TodoList
          todos={todos}
          onCompleted={handleCompleted}
          onRemoveTodo={handleRemoveTodo}
        />
      </section>

      <pre>
        {JSON.stringify(todos, null, 2)}
      </pre>
    </main>
  )
}

export default App