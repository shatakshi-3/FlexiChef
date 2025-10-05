import React from 'react';

const RecipeCard = ({ recipe, onCustomize }) => { // 1. Receive the onCustomize function
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <img src={recipe.image} alt={recipe.name} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-4'>{recipe.name}</h3>
        {/* 2. Attach the function to the button's onClick event */}
        <button 
          onClick={() => onCustomize(recipe)}
          className='bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600'
        >
          Customize
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;