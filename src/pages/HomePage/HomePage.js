import './HomePage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SortRecipes from '../../components/SortRecipes/SortRecipes';

function HomePage () {

  const [recipes, setRecipes] = useState(null);

//to get recipe: response.data.recipe[0]

  useEffect(()=> {axios.get('http://localhost:8080/recipes')
  .then(response => {
    console.log(response.data);
    const recipeData = response.data.recipes.recipe;
    const newRecipeData = recipeData.slice(8, 20);
    setRecipes(newRecipeData);
    
  }).catch (err => {console.log(err)})
},[]);
    
    if(!recipes) {return (<p>Loading....</p>) };

    return (
        <main className="main">
            <h3>Welcome to my site!</h3>
            <p>Feel free to browse the below recipes or use the sort or filter options to search by your desired criteria</p>
            <div className="main__buttons">
              <SortRecipes />
              
            </div>
            <div className="main__display">
     {recipes.map(recipe => {
        return (
            <div className="main__display-item" key={recipe.recipe_id}>        
               <h4>{recipe.recipe_name}</h4>
               <img src={recipe.recipe_image} alt="recipe"/>
               <p>{"Category: " + recipe.recipe_types.recipe_type[0]}</p>
               <p>{"Number of ingredients: " + (recipe.recipe_ingredients.ingredient).length}</p>
            </div> 
         )
     })

    }      </div>
        </main>
    )
};

export default HomePage;