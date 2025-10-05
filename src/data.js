import VegPasta from './assets/veg-pasta.png';
import VegSalad from './assets/veg-salad.png';
import GrilledChicken from './assets/grilled-chicken.png'; 
import LambCurry from './assets/lamb-curry.png';       
import LavaCake from './assets/lava-cake.png';         
import Cheesecake from './assets/cheesecake.png';


export const recipes = [
  { 
    id: 1, 
    name: 'Classic Tomato Pasta', 
    image: VegPasta,
    category: 'Veg',
    baseServings: 2,
    ingredients: [
      { name: 'Pasta', quantity: 200, unit: 'g' },
      { name: 'Tomatoes', quantity: 400, unit: 'g' },
      { name: 'Garlic', quantity: 2, unit: 'cloves' },
      { name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
    ],
    instructions: [
      "Boil the pasta.",
      "Sauté garlic in olive oil.",
      "Add tomatoes and simmer.",
      "Mix with pasta and serve."
    ]
  },
  { 
    id: 2, 
    name: 'Mediterranean Salad', 
    image: VegSalad,
    category: 'Veg',
    baseServings: 2,
    ingredients: [
      // ... ingredients
    ],
    instructions: [
      // ... instructions
    ]
  },
  // ... Add your Non-Veg and Dessert recipes here
  { 
    id: 3, 
    name: 'Grilled Chicken Salad', 
    image: GrilledChicken,
    category: 'Non-Veg',
    baseServings: 2,
    ingredients: [
      { name: 'Chicken Breast', quantity: 2, unit: 'pcs' },
      { name: 'Lettuce', quantity: 1, unit: 'head' },
      { name: 'Cherry Tomatoes', quantity: 1, unit: 'cup' },
      { name: 'Olive Oil', quantity: 3, unit: 'tbsp' },
    ],
    instructions: [
      "Season and grill chicken breast until cooked through.",
      "Chop lettuce and tomatoes.",
      "Slice the chicken and combine all ingredients in a bowl.",
      "Drizzle with olive oil and serve."
    ]
  },
  { 
    id: 4, 
    name: 'Spicy Lamb Curry', 
    image: LambCurry,
    category: 'Non-Veg',
    baseServings: 4,
    ingredients: [
      { name: 'Lamb', quantity: 500, unit: 'g' },
      { name: 'Onion', quantity: 1, unit: 'large' },
      { name: 'Garlic', quantity: 3, unit: 'cloves' },
      { name: 'Curry Powder', quantity: 2, unit: 'tbsp' },
      { name: 'Coconut Milk', quantity: 400, unit: 'ml' },
    ],
    instructions: [
      "Sauté chopped onion and garlic until soft.",
      "Add lamb and brown on all sides.",
      "Stir in curry powder, then add coconut milk.",
      "Simmer for 1 hour until lamb is tender."
    ]
  },

  // --- Add the Dessert recipes below ---
  { 
    id: 5, 
    name: 'Chocolate Lava Cake', 
    image: LavaCake,
    category: 'Dessert',
    baseServings: 2,
    ingredients: [
      { name: 'Dark Chocolate', quantity: 100, unit: 'g' },
      { name: 'Butter', quantity: 50, unit: 'g' },
      { name: 'Egg', quantity: 2, unit: 'large' },
      { name: 'Sugar', quantity: 2, unit: 'tbsp' },
      { name: 'Flour', quantity: 1, unit: 'tbsp' },
    ],
    instructions: [
      "Melt chocolate and butter together.",
      "Whisk eggs and sugar, then fold into the chocolate mixture.",
      "Stir in flour.",
      "Bake at 200°C (400°F) for 12 minutes."
    ]
  },
  { 
    id: 6, 
    name: 'Classic Cheesecake', 
    image: Cheesecake,
    category: 'Dessert',
    baseServings: 8,
    ingredients: [
      { name: 'Cream Cheese', quantity: 500, unit: 'g' },
      { name: 'Sugar', quantity: 150, unit: 'g' },
      { name: 'Eggs', quantity: 3, unit: 'large' },
      { name: 'Graham Cracker Crust', quantity: 1, unit: '9-inch' },
      { name: 'Vanilla Extract', quantity: 1, unit: 'tsp' },
    ],
    instructions: [
      "Beat cream cheese and sugar until smooth.",
      "Mix in eggs and vanilla.",
      "Pour filling into the crust.",
      "Bake at 160°C (325°F) for 55 minutes."
    ]
  },
];