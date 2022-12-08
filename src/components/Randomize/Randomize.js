import './Randomize.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Randomize () {

const [randRecipe, setRandRecipe] = useState([]);


    useEffect(()=> {
        axios.get('http://localhost:8080/recipes')
        .then(response=> {
            let recData = response.data.recipes.recipe;
            setRandRecipe(recData);
           
        }
    ).catch(err => {console.log(err)})
    },[setRandRecipe])

function shuffle (array) {
   setRandRecipe(array.sort(() => Math.random() - 0.5));

}


    return (
        <form>
          <button onClick={() => {shuffle(randRecipe)}}>Randomize</button>
        </form>
    )
};

export default Randomize;