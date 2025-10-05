import React, { useState } from 'react';
import { TbX } from 'react-icons/tb';

const CustomizeModal = ({ recipe, closeModal }) => {
  const [servings, setServings] = useState(recipe.baseServings);
  const [spiceLevel, setSpiceLevel] = useState('medium');
  const [tailoredRecipe, setTailoredRecipe] = useState(null);

  const handleRecipeGeneration = () => {
    // --- The "FlexiChef" Scaling Logic ---
    const newIngredients = recipe.ingredients.map(ingredient => {
      const newQuantity = (ingredient.quantity / recipe.baseServings) * servings;
      
      // Adjust spice
      if (ingredient.name.toLowerCase().includes('chili') || ingredient.name.toLowerCase().includes('spice')) {
        if (spiceLevel === 'low') return { ...ingredient, quantity: newQuantity * 0.5 };
        if (spiceLevel === 'high') return { ...ingredient, quantity: newQuantity * 1.5 };
      }
      
      // Round to 2 decimal places for cleanliness
      return { ...ingredient, quantity: Math.round(newQuantity * 100) / 100 };
    });

    setTailoredRecipe({ ...recipe, ingredients: newIngredients });
  };

  return (
    // Modal Overlay
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{recipe.name}</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
            <TbX size={24} />
          </button>
        </div>

        {!tailoredRecipe ? (
          // --- Customization Form ---
          <div>
            {/* Servings Input */}
            <div className="mb-4">
              <label htmlFor="servings" className="block text-sm font-medium text-gray-700">How many people?</label>
              <input
                type="number"
                id="servings"
                min="1"
                value={servings}
                onChange={(e) => setServings(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Spice Level Input */}
            <div className="mb-6">
              <label htmlFor="spice" className="block text-sm font-medium text-gray-700">Spice Tolerance</label>
              <select
                id="spice"
                value={spiceLevel}
                onChange={(e) => setSpiceLevel(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <button
              onClick={handleRecipeGeneration}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Generate My Recipe
            </button>
          </div>
        ) : (
          // --- Tailored Recipe Display ---
          <div>
            <h3 className="text-xl font-semibold mb-3">Your Tailored Recipe for {servings}</h3>
            <ul className="list-disc list-inside mb-4">
              {tailoredRecipe.ingredients.map(ing => (
                <li key={ing.name}>{ing.quantity} {ing.unit} {ing.name}</li>
              ))}
            </ul>
            <button
              onClick={() => setTailoredRecipe(null)}
              className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"
            >
              Customize Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomizeModal;