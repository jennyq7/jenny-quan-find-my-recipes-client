import axios from 'axios';
import { useEffect, useState } from 'react';
import './NewRecipe.scss';

const API_URL = process.env.REACT_APP_API_URL;

function NewRecipe() {

  const [recipeData, setRecipeData] = useState([]);

  //function to get new added recipes on page load that was posted to the server
  useEffect(() => {
    axios.get(`${API_URL}/recipes/add`)
      .then(response => {
        const org = response.data;
        const filtered = org.filter((item) => item.recipe_id.length > 9);
        setRecipeData(filtered);
      }).catch(err => { console.log(err) })
  }, [])

  return (
    <div className="new">
      <div className="new__top">
        <h4 className="new__top-title">New recipes</h4>
      </div>
      <div className="new__bottom">
        {recipeData.map((recipe) => {
          return (
            <div className="new__bottom-newRecipes" key={recipe.recipe_id}>
              <p className="new__bottom-newRecipes-name">{recipe.recipe_name}</p>
              <div className="new__bottom-newRecipes-box">
                <img src={`${API_URL}${recipe.recipe_image}`} className="new__bottom-newRecipes-box-img" />
              </div>
              <p>{recipe.recipe_types}</p>
              <p>{recipe.ingredients}</p>
            </div>
          )
        })
        }
      </div>
    </div>
  )
};

export default NewRecipe;