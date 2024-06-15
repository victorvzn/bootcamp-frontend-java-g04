console.log('Hola JS')

const url = 'https://jsonplaceholder.typicode.com/posts'

// METHODS: GET, POST, PUT DELETE, PATCH

function fetchPosts() {
  console.log('Llamando al api de JSONPLACEHOLDER')

  return fetch(url)
    .then(response => response.json())
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

fetchPosts()
  .then(posts => {
    console.log(posts)
    renderPosts(posts)
  })