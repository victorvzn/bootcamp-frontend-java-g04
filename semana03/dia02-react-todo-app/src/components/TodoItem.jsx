const TodoItem = ({ todo, onCompleted, onRemoveTodo }) => {
  return (
    <li className="flex">
      <input
        type="checkbox"
        className="mr-2"
        data-id={todo.id}
        data-ejemplo='hola'
        onChange={onCompleted}
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
          onClick={onRemoveTodo}
        >
          ❌
        </button>
      </div>
    </li>
  )
}

export default TodoItem