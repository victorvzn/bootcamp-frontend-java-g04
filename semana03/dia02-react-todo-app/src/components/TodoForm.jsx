import { useState } from "react"

const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    // Estamos capturando lo que escribimos en la caja de texto

    const value = event.target.value

    setInput(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Añadiendo una nueva tarea...')

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    onSubmit(newTodo)

    setInput('')
  }

  return (
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
  )
}

export default TodoForm