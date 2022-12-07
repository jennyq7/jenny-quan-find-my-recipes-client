import './SortRecipes.scss';


function SortRecipes ({recipes}) {

function sortName () {
    recipes.sort((a, b) => {
       if( a.recipe_name > b.recipe_name ) {
        return 1;
       } else if (a.recipe_name < b.recipe_name) {return -1;}
    return 0;
    }
    )
}

 return (
    <div className="sort">
        <label htmlFor="sort">Sort</label>
        <select id="sort" name="sort">
            <option value="start">Choose</option>
            <option value="category">Category</option>
            <option value="name" onClick={sortName}>Name</option>
            <option value="number-of-ingredients">Number of ingredients</option>
        </select>
    </div>
 )
};

export default SortRecipes;