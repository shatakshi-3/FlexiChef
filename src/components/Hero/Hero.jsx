import React from 'react'
import Img from '../../assets/imgHome.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
      {/* 1. Corrected padding and flex direction */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center pt-28 md:pt-32'>
        {/* content */}
        <div className='flex-1 text-center md:text-left'>
          <span className='bg-red-200 text-red-400 text-lg px-5 py-2 rounded-full'>Perfect Portions, Perfect Meals.</span>
          {/* 2. Corrected typography classes */}
          <h1 className='text-4xl md:text-6xl font-semibold leading-tight py-10 font-playfair'>From solo snacks to family feasts, <span className='text-red-400'>FlexiChef</span> scales your favorite recipes instantly.</h1>
          <Button content="Explore Recipes" />
        </div>
        
        {/* image */}
        <div className='flex-1 mt-10 md:mt-0'>
          <img src={Img} alt="Hero image" className='rounded-3xl' />
        </div>
      </div>
    </section>
  )
}

export default Hero
