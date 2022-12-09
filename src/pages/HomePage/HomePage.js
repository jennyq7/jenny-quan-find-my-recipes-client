import './HomePage.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SortRecipes from '../../components/SortRecipes/SortRecipes';
import Randomize from '../../components/Randomize/Randomize';


function HomePage () {


  const [recipes, setRecipes] = useState([]);

  const [newRecipes, setNewRecipes] = useState([]);


  useEffect(()=> {axios.get('http://localhost:8080/recipes')
  .then(response => {
    const recipeData = response.data.recipes.recipe;
    setRecipes(recipeData);
    shuffle(recipes);
    
  }).catch (err => {console.log(err)})
},[]);
    
    if(!recipes) {return (<p>Loading....</p>) };

function handleSort (array) {
    setRecipes(array)
}

function shuffle (arr) {
    //let sorted = ([...randRecipe].sort(() => Math.random() - 0.5));
    console.log('working')
  
     let currentIndex = arr.length,    randomIndex;
     while(currentIndex != 0) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex --;
         [[...arr][currentIndex], [...arr][randomIndex]] = [[...arr][randomIndex], [...arr][currentIndex]]; 
     }
     const newArr = arr.filter((item) => {
        let counter = [];
        while(counter.length < 13) {
        counter.push(item); }
        return counter;
     }); //filter to 12
     setNewRecipes(newArr);
 }


    return (
        <main className="main">
            <h3>Welcome to my site!</h3>
            <p>Feel free to browse the below recipes or use the sort or filter options to search by your desired criteria</p>
            <div className="main__buttons">
              <SortRecipes recipes={recipes} sort={handleSort}/>
              <button onClick={() => {shuffle(recipes)}}>Randomize</button>
            </div>
            <div className="main__display">
     {recipes.map(recipe => {
        return (
            <div className="main__display-item" key={recipe.recipe_id}>        
               <h4>{recipe.recipe_name}</h4>
               <Link to={`/recipes/${recipe.recipe_id}`}><img src={recipe.recipe_image} alt="recipe" className="main__display-item-img"/></Link>
               <p>{"Category: " + recipe.recipe_types.recipe_type[0]}</p>
               <p>{"Number of ingredients: " + (recipe.recipe_ingredients.ingredient).length}</p>
               <button>Save</button>
            </div> 
         )
     })

    }      </div>
        </main>
    )
};

export default HomePage;