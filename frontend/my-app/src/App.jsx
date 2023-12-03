import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Welcome from './pages/welcome'

function App() {
 

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='register' element={<Register/>}></Route>
            <Route path='welcome' element={<Welcome/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
