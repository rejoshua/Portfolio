import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Certificates from './Pages/Certificates'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/certificates' element={<Certificates/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
    </Routes>
   </Router>
  )
}

export default App