console.log('Hola JS')

const url = 'https://jsonplaceholder.typicode.com/posts'

// METHODS: GET, POST, PUT DELETE, PATCH

// async function fetchPosts() {}
// const fetchPosts = async () => {}

const fetchPosts = async () => {
  // return fetch(url)
  //   .then(response => response.json())

  try {
    const response = await fetch(url)

    console.log(response)

    // OK === STATUS CODE 200 / 400
    if (!response.ok) {
      throw new Error('ERROR HTTP:', response.status)
    }

    const json = await response.json()

    return json // Aquí podemos procesar o modificar el json entrante

  } catch (error) {
    console.log(error)
  }
}


const renderPosts = (posts = []) => {
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {
    // console.log(post)

    postList += `
      <div>
        <h2>${post.id} - ${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `
  })

  // console.log(postList)

  // appDiv.innerHTML = '<h1>Uso de promesas</h1>'
  appDiv.innerHTML = postList
}

async function init() {
  const posts = await fetchPosts()

  renderPosts(posts)
}

init()

// const res = fetchPosts()
// res.then(data => renderPosts(data))

// fetchPosts()
//   .then(posts => {
//     console.log(posts)
//     renderPosts(posts)
//   })