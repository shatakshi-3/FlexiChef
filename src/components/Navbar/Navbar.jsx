import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbX } from "react-icons/tb"; 
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='bg-blue-500 fixed top-0 right-0 left-0 z-50'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center'>
        <a href="/" className='text-3xl font-bold text-white'>FlexiChef</a>
        
        {/* Search Bar (Desktop) */}
        <div className='hidden md:flex flex-1 max-w-lg mx-auto items-center bg-white p-1 rounded-full'>
          <input type="text" name="text" placeholder='Search...' autoComplete='off'
            className='flex-1 h-10 w-full px-3 bg-transparent focus:outline-none'/>
          <button className='bg-blue-600 text-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-700'>
            <IoSearch size={20} />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center space-x-8'>
          <li><Link to='/' className='font-semibold text-white hover:text-gray-300'>Home</Link></li>
          <li><Link to='/favorites' className='font-semibold text-white hover:text-gray-300'>Favorites</Link></li>
          <li><Link to='/recipes' className='font-semibold text-white hover:text-gray-300'>Recipes</Link></li>
          <li><Link to='/about' className='font-semibold text-white hover:text-gray-300'>About Us</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button className='md:hidden text-white text-3xl' onClick={toggleMenu}>
          {showMenu ? <TbX /> : <TbMenu2 />}
        </button>

        {/* Mobile Menu */}
        <ul className={`md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md
                       flex flex-col items-center gap-y-6 bg-blue-400/80 backdrop-blur-md rounded-xl p-6
                       transition-all duration-300 ease-in-out
                       ${showMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <li><Link to='/' className='font-semibold text-white hover:text-gray-300'>Home</Link></li>
          <li><Link to='/favorites' className='font-semibold text-white hover:text-gray-300'>Favorites</Link></li>
          <li><Link to='/recipes' className='font-semibold text-white hover:text-gray-300'>Recipes</Link></li>
          <li><Link to='/about' className='font-semibold text-white hover:text-gray-300'>About Us</Link></li>
          
          {/* Search Bar (Mobile) */}
          <li className='w-full items-center bg-white p-1 rounded-full flex'>
            <input type="text" name="text" placeholder='Search...' autoComplete='off'
              className='flex-1 h-10 w-full px-3 bg-transparent focus:outline-none'/>
            <button className='bg-blue-600 text-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-700'>
              <IoSearch size={20} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;