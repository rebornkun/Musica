import { useState } from 'react'
import './App.css'
import AsideNav from '../Components/AsideNav/AsideNav'
import Home from '../Pages/Home/Home'
import SearchBar from '../Components/SearchBar/SearchBar'

function App() {

  return (
    <div className="App">
      <nav>
        <AsideNav />
      </nav>
      <div className='top'>
        <div className='search_bar_part'>
          <SearchBar />
        </div>
      </div>
      <div className='route_container'>
        <Home />
      </div>
    </div>
  )
}

export default App
