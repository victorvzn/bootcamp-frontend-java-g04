console.log('Hola JS')

const taskInput = document.getElementById('taskInput')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

// console.log(taskInput)
// console.log({ taskAdd })
// console.log({ taskList })

// EVENTOS

// ELEMENTO.addEventListener(NOMBRE_EVENTO, FUNCION)

taskAdd.addEventListener('click', function (event) {
  // Se ejecutará cuando hagamos click en el botón 'Añadir tarea'
  // console.log('CLick!!!')
  // console.log(taskInput.value)

  // Forma de crear elementos dinámicamente con JS
  // const button = document.createElement('button')
  // button.textContent = 'Hola soy un botón'
  // document.body.appendChild(button)

  // DONE: Validar la entrada del usuario

  if (taskInput.value === '') {
    alert('El campo es requerido')

    return
  }

  // Añadiendo un elemento li al elemento con la clase task__list
  const li = document.createElement('li')

  // TODO: Añadir un checkbox y al hacerle click que tache solo el texto de la tarea de color rojo. Ayuda CSS: "color: red; text-decoration: line-through;"

  const span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)

  // DONE: Añadir un botón dentro del li con el texto 'borrar'

  const button = document.createElement('button')
  button.textContent = '❌'
  li.appendChild(button)

  taskList.appendChild(li)

  // DONE: Limpiar la caja de texto después de crear la tarea
  taskInput.value = ''

  // taskInput.focus()
})

// DONE: Permitir al botón borrar remover una tarea de la lista.

taskList.addEventListener('click', function (event) {
  console.log({ target: event.target })

  const { target } = event // Obetenemos el elemento presionado

  if (target.tagName === 'BUTTON') {
    console.log('eliminando tarea...')
    target.parentElement.remove()
  }
})