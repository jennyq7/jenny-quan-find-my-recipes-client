import './Randomize.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Randomize () {

const [randRecipe, setRandRecipe] = useState([]);

const [newRecipes, setNewRecipes] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8080/recipes')
        .then(response=> {
            let recData = response.data.recipes.recipe;
            setRandRecipe(recData);
           
        }
    ).catch(err => {console.log(err)})
    },[setNewRecipes])

function shuffle () {
   //let sorted = ([...randRecipe].sort(() => Math.random() - 0.5));
    let currentIndex = randRecipe.length,    randomIndex;
    while(currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;
        [randRecipe[currentIndex], randRecipe[randomIndex]] = [randRecipe[randomIndex], randRecipe[currentIndex]]; 
    }
    const newArr = randRecipe.slice(0, 13);
    setNewRecipes(newArr);
}

    return (
        <form>
          <button onClick={shuffle}>Randomize</button>
        </form>
    )
};

export default Randomize;