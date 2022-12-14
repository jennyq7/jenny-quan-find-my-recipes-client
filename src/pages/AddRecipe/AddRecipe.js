import axios from 'axios';
import './AddRecipe.scss';
import recipeImg from '../../assets/recipe.jpg';
import { Link } from 'react-router-dom';
import NewRecipe from '../../components/NewRecipe/NewRecipe';

function AddRecipe() {

    function addRecipe(e) {
        e.preventDefault();

        const recipeInfo = {
            recipe_name: e.target.name.value,
            recipe_description: e.target.description.value,
            recipe_types: e.target.types.value,
            directions: e.target.directions.value,
            cooking_time_min: e.target.cooking_time.value,
            ingredients: e.target.ingredients.value
        }

        axios.post('http://localhost:8080/recipes/add', recipeInfo)
            .then(response => {
                alert("Recipe has been added")
                console.log(alert)
            }).catch(err => { console.log(err) });

        e.target.reset();
    }


    return (
        <div className="add">
            <form className="add__form" onSubmit={addRecipe}>
                <div className="add__form-left">
                <h1 className="add__form-left-title">Add a recipe</h1>
                    <label htmlFor="name" className="add__form-left-label">Recipe Name</label>
                    <input type="text" name="name" id="name" required  className="add__form-left-input"/>
                    <label htmlFor="description" className="add__form-left-label">Description</label>
                    <input type="text" name="description" id="description" className="add__form-left-input" required />
                    <img src={recipeImg} alt="food prep" className="add__form-left-img"/>
                </div>
                <div className="add__form-right">
                    <label htmlFor="types" className="add__form-right-label">Type/category</label>
                    <input type="text" name="types" id="types" className="add__form-right-input" required />
                    <label htmlFor="directions" className="add__form-right-label">Directions</label>
                    <input type="text" name="directions" id="directions" className="add__form-right-input" required />
                    <label htmlFor="cooking_time" className="add__form-right-label">Cooking time</label>
                    <input type="text" name="cooking_time" id="cooking_time" className="add__form-right-input" required />
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