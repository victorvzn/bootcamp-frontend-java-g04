import { useState } from "react"

const App = () => {
  const DEFAULT_TODOS = [
    {
      id: 1,
      title: 'Aprender JS',
      completed: true
    },
    {
      id: 2,
      title: 'Aprender CSS',
      completed: true
    },
    {
      id: 2,
      title: 'Aprender React.js + Tailwindcss',
      completed: false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)

  return (
    <main>
      <h1 className="text-2xl font-bold text-center">
        TODO APP
      </h1>

      {/* {JSON.stringify(todos)} */}

      <form>
        <input
          className="w-full border my-3 p-3"
          type="text"
          placeholder="¿Qué deseas hacer hoy?"
          required
        />
      </form>

      <div>
        <span>2 de 3 completadas</span>
        <button>
          Limpir tareas completadas
        </button>
      </div>

      <section>
        <ul>
          <li>
            <input type="checkbox" />
            <div>
              <span>title 1</span>
              <button>❌</button>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App