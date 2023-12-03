import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
 

  return (
    <>

      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
