import React from 'react'
// Import an icon, for example, from Font Awesome
import { FaArrowRight } from "react-icons/fa";

const Button = ({ content }) => {
  return (
    <button className='group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white font-bold rounded-lg shadow-lg overflow-hidden transform transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95'>
      {/* Background shine effect on hover */}
      <span className="absolute top-0 left-0 w-full h-full bg-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
      
      {/* Content */}
      <span className='relative z-10'>{content}</span>
      
      {/* Icon with hover animation */}
      <span className='relative z-10 ml-2 transform transition-transform duration-300 group-hover:translate-x-1'>
        <FaArrowRight />
      </span>
    </button>
  )
}

export default Button