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
        
         <div className="new">
              <h4 className="new__title">New recipes</h4>
         {recipeData.map((recipe)=> {
            return (
              <div className="new__newRecipes" key={recipe.recipe_id}>  
                <p className="new__newRecipes-name">{recipe.recipe_name}</p>
                <img src={`http://localhost:8080${recipe.recipe_image}`} className="new__newRecipes-img"/>
                <p>{recipe.recipe_types}</p>
                <p>{recipe.ingredients}</p>
              </div>
            )
         })
            }
         </div>
        
    )
};

export default NewRecipe;