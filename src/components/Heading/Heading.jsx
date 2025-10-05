import React from 'react'

const Heading = ({ title }) => {
  return (
    <div className='text-center py-10'>
      <h2 className='text-blue-500 md:text-5xl font-bold text-4xl 
                     drop-shadow-lg shadow-gray-400
                     transition-all duration-300 ease-in-out
                     hover:shadow-gray-600'>
        {title}
      </h2>
    </div>
  )
}

export default Heading