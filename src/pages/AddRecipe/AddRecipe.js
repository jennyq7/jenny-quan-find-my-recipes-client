import axios from 'axios';
import './AddRecipe.scss';
import recipeImg from '../../assets/recipe.jpg';
import { Link } from 'react-router-dom';
import NewRecipe from '../../components/NewRecipe/NewRecipe';

function AddRecipe () {

   function addRecipe (e) {
    e.preventDefault();

    const recipeInfo =  {
        recipe_name: e.target.name.value,
        recipe_description: e.target.description.value,
        recipe_types: e.target.types.value,
        directions: e.target.directions.value,
        cooking_time_min: e.target.cooking_time.value,
        ingredients: e.target.ingredients.value
    }

    axios.post('http://localhost:8080/recipes/add', recipeInfo)
    .then(response => {
    
    }).catch (err => {console.log(err)});

    e.target.reset();
   }
   
    
    return (
 <>      
    <form className="form" onSubmit={addRecipe}>
          <h1>Add a recipe</h1>
        <div className="form__left">
            <label htmlFor="name">Recipe Name</label>
            <input type="text" name="name" id="name" required/>   
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" required/>  
            <img src={recipeImg} alt="food prep" />
        </div>
        <div className="form__right">
            <label htmlFor="types">Type/category</label>
            <input type="text" name="types" id="types" required/>  
            <label htmlFor="directions">Directions</label>
            <input type="text" name="directions" id="directions" required/>  
            <label htmlFor="cooking_time">Cooking time</label>
            <input type="text" name="cooking_time" id="cooking_time" required/>  
            <label htmlFor="ingredients">Ingredients</label>
            <input type="text" name="ingredients" id="ingredients" required/> 
            <button>Add My Recipe</button> 
            <Link to="/recipes"><button>Cancel</button></Link>
        </div>    
    </form>
    <NewRecipe />
 </>
    )
};

export default AddRecipe;