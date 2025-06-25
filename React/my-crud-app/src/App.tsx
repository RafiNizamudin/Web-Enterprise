import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import UserRegister from './pages/UserRegister'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/register' element={<UserRegister />} />
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
