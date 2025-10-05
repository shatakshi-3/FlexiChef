import React from 'react'
import Home from './Pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RecipeListPage from './pages/RecipeListPage'

const Favorites = () => <div className='pt-20 text-center text-4xl'>Favorites Page</div>
const Recipes = () => <div className='pt-20 text-center text-4xl'>Recipes Page</div>
const About = () => <div className='pt-20 text-center text-4xl'>About Us Page</div>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipes/:categoryName" element={<RecipeListPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App