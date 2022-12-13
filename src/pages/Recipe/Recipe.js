import axios from 'axios';
import { useEffect, useState } from 'react';
import './Recipe.scss';
import { useParams} from 'react-router-dom';

function Recipe () {


const { id } = useParams();

const [recipeData, setRecipeData] = useState(null);


    useEffect(() => {
        if(id === null) {return <p>loading</p>};
       axios.get(`http://localhost:8080/recipes/id/${id}`)
        .then(response => {
            const results = response.data.recipe;
            setRecipeData(results);
            //console.log(results);
    }).catch(err => {console.log(err)})
    },[])

    if(!recipeData) {return <p>loading</p>};

    return (
    <div key={recipeData.recipe_id} className="indRecipe">
       
         <h1 className="indRecipe__pageTitle">Recipe details</h1> 
         <h3 className="indRecipe__title">{recipeData.recipe_name}</h3> 
         <div className="indRecipe__container">
           <img src={recipeData.recipe_images.recipe_image} alt="recipe" className="indRecipe__container-img"/> 
         </div>
         <p>Type: {recipeData.recipe_types.recipe_type}</p>
         <p className="indRecipe__descrip">Description: {recipeData.recipe_description}</p>
         <p className="indRecipe__time">Cooking time: {recipeData.cooking_time_min} minutes</p>
         <div className="indRecipe__ingredients">Ingredients:
         {(recipeData.ingredients.ingredient).map((item)=> {
            
         return  <div className="ingredients" key={item.food_id}> 
                   <p>{item.ingredient_description}</p>
                </div>
         })
         }
         </div>
         <div className="indRecipe__directions">Directions:
         {(recipeData.directions.direction).map((item)=> {
            return <div className="indRecipe__directions-items" key={item.direction_number}>
                     <p>{item.direction_number}</p>
                     <p>{item.direction_description}</p>
                   </div>
         })
        }
         </div>
         <div className="indRecipe__tag">
            <a href="https://platform.fatsecret.com">
              <img src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png" srcSet="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_2x.png 2x, https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_3x.png 3x" border="0"/>
            </a>	
         </div>   
     </div> 
    )
};

export default Recipe;