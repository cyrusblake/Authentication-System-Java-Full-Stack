import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

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
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
