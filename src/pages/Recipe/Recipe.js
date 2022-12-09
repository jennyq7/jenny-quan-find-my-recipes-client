import axios from 'axios';
import { useEffect, useState } from 'react';
import './Recipe.scss';
import { useParams} from 'react-router-dom';

function Recipe () {


const { id } = useParams();

const [recipeData, setRecipeData] = useState(null);


    useEffect(() => {
        if(id === null) {return <p>loading</p>};
       axios.get(`http://localhost:8080/recipes/${id}`)
        .then(response => {
            const results = response.data.recipe;
            setRecipeData(results);
            console.log(results);
    }).catch(err => {console.log(err)})
    },[])

    if(!recipeData) {return <p>loading</p>};

    return (
    <div key={recipeData.recipe_id}>
       
         <h1>Recipe details</h1> 
         <h3>{recipeData.recipe_name}</h3> 
         <img src={recipeData.recipe_images.recipe_image} alt="recipe" /> 
         <p>{recipeData.recipe_types.recipe_type}</p>
         <p>{recipeData.recipe_description}</p>
         <p>{recipeData.preparation_time_min}</p>
         <p>{recipeData.ingredients.ingredient[0].food_name}</p>
     </div> 
    )
};

export default Recipe;