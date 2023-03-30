import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import FetchData from './components/FetchData'
import Home from './pages/Home'
import { useContext } from 'react'
import {Appcontext} from "./components/Navbar"
const App = () => {
  const {search } = useContext(Appcontext)
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/general" element={<FetchData cat="general" />} />
      <Route path="/business" element={<FetchData cat="business" />} />
      <Route path="/sports" element={<FetchData cat="sports" />} />
      <Route path="/entertainment" element={<FetchData cat="entertainment" />} />
      <Route path="/health" element={<FetchData cat="health" />} />
      <Route path="/science" element={<FetchData cat="science" />} />
      <Route path="/technology" element={<FetchData cat="technology" />} />
      <Route path="/{search}" element={<FetchData search="{search}" />} />
    </Routes>
    
    </Router>
    
    </>
  )
}

export default App
