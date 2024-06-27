import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import LayoutBase from "./layouts/LayoutBase"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LayoutBase />}>

          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App