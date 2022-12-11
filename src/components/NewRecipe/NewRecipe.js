import axios from 'axios';
import { useEffect, useState } from 'react';
import './NewRecipe.scss';

function NewRecipe () {
    
    const [recipeData, setRecipeData] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8080/recipes/add')
        .then(response => {
            const org = response.data;
            const filtered = org.filter((item) => item.recipe_id.length > 9)
           console.log(filtered)
            setRecipeData(filtered);
        }).catch(err => {console.log(err)})
    }, [])
     
    return (
        <>
         <div>New recipes
         {recipeData.map((recipe)=> {
            return (
              <div className="indRecipes" key={recipe.recipe_id}>  
                <p>{recipe.recipe_name}</p>
                <p>{recipe.recipe_image}</p>
                <p>{recipe.recipe_types}</p>
                <p>{recipe.ingredients}</p>
              </div>
            )
         })
            }
         </div>
        </>
    )
};

export default NewRecipe;