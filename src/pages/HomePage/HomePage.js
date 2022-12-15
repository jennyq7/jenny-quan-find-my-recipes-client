import './HomePage.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SortRecipes from '../../components/SortRecipes/SortRecipes';


function HomePage() {
  //the state to set original array
  const [recipes, setRecipes] = useState([]);

  //the state to set the new sliced array
  const [newRecipes, setNewRecipes] = useState([]);

  //function to get all recipes from API 
  useEffect(() => {
    axios.get('http://localhost:8080/recipes')
      .then(response => {
        const recipeData = response.data.recipes.recipe;
        setRecipes(recipeData);
      }).catch(err => { console.log(err) })
  }, []);

  if (!recipes) { return (<p>Loading....</p>) };

  //function to pass down array to sort recipes component
  function handleSort(array) {
    setRecipes(array)
  }

  //function to shuffle main array
  const shuffle = (arr) => {

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    const newArr = arr.slice(0, 12); //filter to 12
    setNewRecipes(newArr);
  };


  //function to save recipe when click on save button to backend
  function saveRecipe(id) {

    axios.post('http://localhost:8080/recipes/saved', { recipe_id: id })
      .then(response => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }).catch(err => {
        console.log(err)
      });
  }


  return (
    <main className="main">
      <div className="main__top">
        <Link to="/recipes/saved" className="main__top-link"><button className="main__top-button">Saved recipes</button></Link>
        <Link to="/recipes/add" className="main__top-link"><button className="main__top-button">Add a recipe</button></Link>
      </div>
      <h3 className="main__title">Welcome to Recipe Box!</h3>
      <p className="main__descrip">Feel free to browse the below recipes or use the sort options to search by your desired criteria</p>
      <div className="main__buttons">
        <SortRecipes recipes={recipes} sort={handleSort} />
        <button onClick={() => { shuffle(recipes) }} className="main__buttons-rand">Randomize</button>
      </div>
      <p className="main__small">Small selection</p>
      <div className="main__aside">
        {newRecipes.map(recipe => {
          return (
            <div className="main__aside-items" key={recipe.recipe_id}>
              <h4 className="main__aside-items-title">{recipe.recipe_name}</h4>
              <div className="main__aside-items-container">
                <Link to={`/recipes/${recipe.recipe_id}`} className="main__aside-items-container-link">
                  <img src={recipe.recipe_image} alt="recipe" className="main__aside-items-container-img" />
                </Link>
              </div>
              <p className="main__aside-items-text">{"Category: " + recipe.recipe_types.recipe_type[0]}</p>
              <p className="main__aside-items-text">{"Number of ingredients: " + (recipe.recipe_ingredients.ingredient).length}</p>
              <div className="main__aside-items-tag">
                <a href="https://platform.fatsecret.com">
                  <img src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png" srcSet="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_2x.png 2x, https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_3x.png 3x" border="0" />
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <p className="main__recipes">Main Display</p>
      <div className="main__display">
        {recipes.map(recipe => {
          return (
            <div className="main__display-item" key={recipe.recipe_id}>
              <h4 className="main__display-item-title">{recipe.recipe_name}</h4>
              <div className="main__display-item-container">
                <Link to={`/recipes/${recipe.recipe_id}`} className="main__display-item-container-link">
                  <img src={recipe.recipe_image} alt="recipe" className="main__display-item-container-link-img" />
                </Link>
              </div>
              <p className="main__display-item-text">{"Category: " + recipe.recipe_types.recipe_type[0]}</p>
              <p className="main__display-item-text">{"Number of ingredients: " + (recipe.recipe_ingredients.ingredient).length}</p>
              <div className="main__display-item-bottom">
                <button onClick={() => { saveRecipe(recipe.recipe_id) }} className="main__display-item-bottom-save">Save</button>
                <div className="main__display-item-bottom-tag">
                  <a href="https://platform.fatsecret.com">
                    <img src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png" srcSet="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_2x.png 2x, https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_3x.png 3x" border="0" />
                  </a>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </main>
  )
};

export default HomePage;

