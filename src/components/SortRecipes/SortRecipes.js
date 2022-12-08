import './SortRecipes.scss';
import { useState, useEffect } from 'react';

function SortRecipes ({recipes, sort}) {


const [sortType, setSortType] = useState('');

useEffect(() => {
 const sortArray = type => {
const types = {
    name: 'recipe_name',
    category: 'category',
    number_of_ingredients: 'number_of_ingredients'
}; 


const sortProperty = types[type];
 const sorted = [...recipes].sort((a, b) =>  { 

 
    return b[sortProperty] - a[sortProperty]});


sort(sorted);

}; sortArray(sortType);
},[sortType]);

 return (
    <form className="sort">
        <label htmlFor="sort">Sort</label>
        <select id="sort" name="sort" onChange={(e) => {setSortType(e.target.value)}}>
            <option value="start">Choose</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="number_of_ingredients">Number of ingredients</option>
        </select>
    </form>
 )
};

export default SortRecipes;