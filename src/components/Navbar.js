import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createContext } from 'react'

export const Appcontext = createContext("")
const Navbar = () => {
   const [search, setsearch] = useState("")
   

  
  return (
    <div><nav class="navbar navbar-expand-lg bg-secondary text-white" >
    <div class="container-fluid">
      <Link class="navbar-brand text-white" to="#"><h3>NewsKEEDA</h3></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active text-white" aria-current="page" to="/" style={{fontSize:"1.2rem"}}>Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" aria-current="page" to="/general" style={{fontSize:"1.2rem"}}>General</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white" to="/business" style={{fontSize:"1.2rem"}}>Business</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" aria-current="page" to="/sports" style={{fontSize:"1.2rem"}}>Sports</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" aria-current="page" to="/entertainment" style={{fontSize:"1.2rem"}}>Entertainment</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" aria-current="page" to="/health" style={{fontSize:"1.2rem"}}>Health</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" aria-current="page" to="/science" style={{fontSize:"1.2rem"}}>Science</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" aria-current="page" to="/technology" style={{fontSize:"1.2rem"}}>Technology</Link>
          </li>
          
        </ul>
        <Appcontext.Provider value={{search}} >
        <form class="d-flex bg-light" role="search" >
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={ (e) =>{ setsearch(e.target.value)}} />
          <Link class="btn btn-light" to="/{search}">
          <i class="fa-solid fa-magnifying-glass fa-beat" style={{color: "#020203"}}></i>
          </Link>
        </form>
        </Appcontext.Provider>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar