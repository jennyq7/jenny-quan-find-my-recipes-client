import axios from 'axios';
import { useEffect, useState } from 'react';
import './NewRecipe.scss';

function NewRecipe () {
    
    const [recipeData, setRecipeData] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8080/recipes/add')
        .then(response => {
            setRecipeData(response)
            console.log(response)
        }).catch(err => {console.log(err)})
    }, [])
    
    return (
        <>
         <h2>{recipeData.recipe_name}</h2>
        </>
    )
};

export default NewRecipe;