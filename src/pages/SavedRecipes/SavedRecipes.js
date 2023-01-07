import './SavedRecipes.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';

const API_URL = process.env.REACT_APP_API_URL;

function SavedRecipes() {

    const [savedRecipes, setSavedRecipes] = useState([]);

    //function to get all saved recipes
    useEffect(() => {
        axios.get(`${API_URL}/recipes/saved`)
            .then(response => {
                setSavedRecipes(response.data);
            }).catch(err => { console.log(err) })
    }, [])

    return (
        <div className="saved">
            <h1 className="saved__title">Saved recipes</h1>
            <div className="saved__recipes">
                {savedRecipes.map((recipe) => {
                    return (
                        <RecipeInfo recipe={recipe.recipe} key={recipe.recipe.recipe_id} />
                    )
                })
                }
            </div>
        </div>
    )
};

export default SavedRecipes;