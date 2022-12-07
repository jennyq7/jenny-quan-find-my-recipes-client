import './HomePage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SortRecipes from '../../components/SortRecipes/SortRecipes';

function HomePage () {

  const [recipes, setRecipes] = useState(null);

//to get recipe: response.data.recipe[0]

  useEffect(()=> {axios.get('http://localhost:8080/recipes')
  .then(response => {
   // console.log(response.data);
    setRecipes(response.data);
  }).catch (err => {console.log(err)})
},[]);
    
    if(!recipes) {return (<p>Loading....</p>) };

    return (
        <main className="main">
            <h3>Welcome to my site!</h3>
            <p>Feel free to browse the below recipes or use the sort or filter options to search by your desired criteria</p>
            <SortRecipes />
            <div className="main__display">
                
            </div>
        </main>
    )
};

export default HomePage;