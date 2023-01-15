import axios from 'axios';
import './AddRecipe.scss';
import recipeImg from '../../assets/recipe.jpg';
import { Link } from 'react-router-dom';
import NewRecipe from '../../components/NewRecipe/NewRecipe';
import { useState} from 'react';

const API_URL = process.env.REACT_APP_API_URL;

function AddRecipe() {

    // const [newRecipe, setNewRecipe] = useState({
    //     recipe_name: "",
    //     recipe_description: "",
    //     recipe_types: "",
    //     directions: "",
    //     cooking_time_min: "",
    //     ingredients: ""
    // })

    // const updateRecipe = e => {
    //     const {name, value} = e.target; 
    //     setNewRecipe((current) => {
    //         return {
    //             ...current,
    //             [name]: value
    //         };
    //     })
    // }

    //function to post recipes to backend
    function addRecipe(e) {

        const recipeInfo = {
            recipe_name: e.target.recipe_name.value,
            recipe_description: e.target.recipe_description.value,
            recipe_types: e.target.recipe_types.value,
            directions: e.target.directions.value,
            cooking_time_min: e.target.cooking_time_min.value,
            ingredients: e.target.ingredients.value,
        }

        // const form = e.target;

        // const formData = new FormData(form);
     // formData, {
        //     headers: {"Content-Type": "multipart/form-data"} }
        axios.post(`${API_URL}/recipes/add`, recipeInfo) 
        .then(response => {
                return response.data;
            }).catch(err => { console.log(err) });
        alert("Recipe has been added");
        e.target.reset();
    };


    return (
        <div className="add">
            <form className="add__form" onSubmit={addRecipe}>
                <div className="add__form-left">
                    <h1 className="add__form-left-title">Add a recipe</h1>
                    <label htmlFor="recipe_name" className="add__form-left-label">Recipe Name</label>
                    <input type="text" name="recipe_name" id="recipe_name" required className="add__form-left-input" />
                    <label htmlFor="recipe_description" className="add__form-left-label">Description</label>
                    <input type="text" name="recipe_description" id="recipe_description" className="add__form-left-input" required />
                    <img src={recipeImg} alt="food prep" className="add__form-left-img" />
                    {/* <input type="file" name="file" onChange={updateRecipe} id="file" className="add__form-left-input--file" required/> */}
                </div>
                <div className="add__form-right">
                    <label htmlFor="recipe_types" className="add__form-right-label">Type/category</label>
                    <input type="text" name="recipe_types" id="recipe_types" className="add__form-right-input" required />
                    <label htmlFor="directions" className="add__form-right-label">Directions</label>
                    <input type="text" name="directions" id="directions" className="add__form-right-input" required />
                    <label htmlFor="cooking_time_min" className="add__form-right-label">Cooking time</label>
                    <input type="text" name="cooking_time_min" id="cooking_time_min" className="add__form-right-input" required />
                    <label htmlFor="ingredients" className="add__form-right-label">Ingredients</label>
                    <input type="text" name="ingredients" id="ingredients" className="add__form-right-input" required />
                    <div className="add__form-right-buttons">
                        <button className="add__form-right-buttons-add">Add My Recipe</button>
                        <Link to="/recipes" className="add__form-right-buttons-link"><button className="add__form-right-buttons-cancel">Cancel</button></Link>
                    </div>
                </div>
            </form>
            <NewRecipe />
        </div>
    )
};

export default AddRecipe;