import React from 'react'
import Heading from '../Heading/Heading'
import Veg from '../../assets/veg.png'
import NonVeg from '../../assets/non-veg.png'
import Dessert from '../../assets/dessert.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom' // 1. Import Link

const Category = () => {
  const renderCards = category.map(card => {
    return (
      <div key={card.id} className='flex-1 bg-white rounded-lg shadow-xl shadow-gray-400 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-gray-500'>
        <div>
          <img src={card.image} alt={card.title} />
        </div>
        
        <div className='p-4 text-center flex flex-col flex-grow'>
          <h3 className='text-red-500 font-bold text-3xl mb-2'>{card.title}</h3>
          <p className='text-zinc-500 font-semibold mb-4 flex-grow'>{card.description}</p>
          
          {/* 2. Wrap the Button with a Link */}
          <Link to={`/recipes/${card.title.toLowerCase()}`}>
            <Button content="See All"/>
          </Link>

        </div>
      </div>
    )
  })

  return (
    <section>
      <div className='max-w-7xl mx-auto px-10 py-16'>
        <Heading title="What Are You Craving?" />
        
        <div className='flex gap-10 mt-12'>
          {renderCards}
        </div>
      </div>
    </section>
  )
}

export default Category

const category = [
  {
    id: 1,
    title: 'Veg',
    description: 'Discover the best plant-based recipes for every occasion.',
    image: Veg
  },
  {
    id: 2,
    title: 'Non-Veg',
    description: 'Indulge in protein-packed recipes for every craving.',
    image: NonVeg
  },
  {
    id: 3,
    title: 'Dessert',
    description: 'Indulge in perfect desserts for any craving.',
    image: Dessert
  }
];