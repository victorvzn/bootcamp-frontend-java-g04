import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutBase from './layouts/LayoutBase'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LayoutBase />}>
          <Route path='/' element={<h1>Login Page</h1>} />
          <Route path='/invoices' element={<h1>Invoices Page</h1>} />
          <Route path='/invoices/new' element={<h1>New Invoice Page</h1>} />
          <Route path='/invoices/:id' element={<h1>Invoice Detail Page</h1>} />
          <Route path='/invoices/:id/edit' element={<h1>Invoice Edit Page</h1>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App