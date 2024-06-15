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

  // TODO: Validar la entrada del usuario

  // Añadiendo un elemento li al elemento con la clase task__list
  const li = document.createElement('li')

  const span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)

  taskList.appendChild(li)

  // TODO: Limpiar la caja de texto después de crear la tarea

})