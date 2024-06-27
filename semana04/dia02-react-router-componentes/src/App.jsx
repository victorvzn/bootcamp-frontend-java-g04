import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<h1>LOGIN PAGE</h1>} />
        <Route path='/register' element={<h1>REGISTER PAGE</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App