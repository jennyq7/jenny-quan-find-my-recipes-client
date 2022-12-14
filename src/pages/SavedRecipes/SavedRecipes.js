import './SavedRecipes.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';

function SavedRecipes () {

    const [savedRecipes, setSavedRecipes] = useState([]);

   useEffect(() => { axios.get('http://localhost:8080/recipes/saved')
    .then(response => {
       setSavedRecipes(response.data);
       console.log(savedRecipes)
    }).catch (err => {console.log(err)})
},[])



    return (
        <div className="saved">
            <h1 className="saved__title">Saved recipes</h1>
            <div className="saved__recipes">
               {savedRecipes.map((recipe) => {
               return( 
               <RecipeInfo recipe={recipe.recipe} key={recipe.recipe.recipe_id}/>
               )})
               }
            </div>
        </div>
    )
};
 
export default SavedRecipes;