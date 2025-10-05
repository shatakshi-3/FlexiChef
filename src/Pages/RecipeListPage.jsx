import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../data'; // Import your new data
import RecipeCard from '../components/RecipeCard/RecipeCard'; // Assuming your card is here
import CustomizeModal from '../components/CustomizeModal/CustomizeModal';

const RecipeListPage = () => {
  const { categoryName } = useParams(); // Gets 'veg', 'non-veg', etc. from the URL

  // Filter the recipes based on the category from the URL
  const filteredRecipes = recipes.filter(
    recipe => recipe.category.toLowerCase() === categoryName
  );

  console.log('URL Category:', categoryName, 'Found Recipes:', filteredRecipes);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCustomizeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div className='max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold text-center mb-12 capitalize'>
        {categoryName} Recipes
      </h1>
      
      {/* Responsive Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onCustomize={handleCustomizeClick} />
        ))}
      </div>
      {isModalOpen && <CustomizeModal recipe={selectedRecipe} closeModal={handleCloseModal} />}
    </div>
  );
};

export default RecipeListPage;