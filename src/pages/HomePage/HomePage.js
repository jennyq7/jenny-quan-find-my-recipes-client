import './HomePage.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SortRecipes from '../../components/SortRecipes/SortRecipes';


function HomePage () {


  const [recipes, setRecipes] = useState([]);

  const [newRecipes, setNewRecipes] = useState([]);


  useEffect(()=> {axios.get('http://localhost:8080/recipes')
  .then(response => {
    const recipeData = response.data.recipes.recipe;
    setRecipes(recipeData);
    
  }).catch (err => {console.log(err)})
},[]);
    
    if(!recipes) {return (<p>Loading....</p>) };

function handleSort (array) {
    setRecipes(array)
}

const shuffle =  (arr) => {
   
    console.log('working');
 
    for (let i = arr.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

     console.log(arr);

     const newArr = arr.slice(0, 12); //filter to 12
     setNewRecipes(newArr);
     
}; 



    return (
        <main className="main">
            <h3>Welcome to my site!</h3>
            <p>Feel free to browse the below recipes or use the sort or filter options to search by your desired criteria</p>
            <div className="main__buttons">
              <SortRecipes recipes={recipes} sort={handleSort}/>
              <button onClick={() => {shuffle(recipes)}}>Randomize</button>
            </div>
            <p>Small selection</p>
            <div className="main__aside">
        {newRecipes.map(recipe => {
                    return (
                    <div className="main__aide-items" key={recipe.recipe_id}>        
                        <h4>{recipe.recipe_name}</h4>
                        <Link to={`/recipes/${recipe.recipe_id}`}><img src={recipe.recipe_image} alt="recipe" className="main__aside-item-img"/></Link>
                        <p>{"Category: " + recipe.recipe_types.recipe_type[0]}</p>
                        <p>{"Number of ingredients: " + (recipe.recipe_ingredients.ingredient).length}</p>
                        <button>Save</button>
                     </div>  
                    )
                })}
            </div>
            <p>main display</p>
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