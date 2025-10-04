import React from 'react'
import Img from '../../assets/imgHome.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
        <div className='max-w-7xl mx-auto px-10 py-10 flex md:flex-row flex-col items-center md:pt-25 pt-30'>
        {/* content */}
        <div className=' flex-1 max-w-7xl max-auto px-10 py-5'>
            <span className='bg-red-200 text-red-400 text-lg px-5 py-2 rounded-full'>Perfect Portions, Perfect Meals.</span>
            <h1 className='md:text-6xl /20 text-4xl/10 text-shadow-lg/20 font-[645] py-10 font-playfair'>From solo snacks to family feasts, <span className='text-red-400'>FlexiChef</span> scales your favorite recipes instantly.</h1>
            
        </div>
        

        {/* image */}
        <div className='flex-1 px-10 w-4/5'>
            <img src={Img} alt="Hero image" className='rounded-3xl'/>
        </div>
        </div>
    </section>
  )
}

export default Hero
