import './SavedRecipes.scss';
import { useState } from 'react';
import axios from 'axios';

function SavedRecipes () {

    const [savedRecipe, setSavedRecipe] = useState([]);

    axios.get('http://localhost:8080/recipes/saved')
    .then(response => {
        console.log(response)

    }).catch (err => {console.log(err)})

console.log(savedRecipe)

    return (
        <>
        
        </>
    )
};
 
export default SavedRecipes;