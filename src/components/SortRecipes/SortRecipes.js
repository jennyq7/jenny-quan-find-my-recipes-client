import './SortRecipes.scss';
import { useState, useEffect } from 'react';

function SortRecipes({ recipes, sort }) {


    const [sortType, setSortType] = useState('');

    useEffect(() => {
        const sortArray = type => {
            const types = {
                name: 'recipe_name',
                category: 'category',
                number_of_ingredients: 'number_of_ingredients'
            };


            const sortProperty = types[type];
            const sorted = [...recipes].sort((a, b) => {
                //console.log("sorting", sortProperty, a[sortProperty], b[sortProperty], a.recipe_types.recipe_type[0], a.recipe_ingredients.ingredient.length)
                if (sortProperty === "recipe_name") {

                    if (a[sortProperty] < b[sortProperty]) {
                        return -1;
                    }
                   else return 1;
                }
                else if (sortProperty === "category") {
                    if (a.recipe_types.recipe_type[0] < b.recipe_types.recipe_type[0]) {
                        return -1;
                    } else return 1;
                }
                else {
                    if(a.recipe_ingredients.ingredient.length < b.recipe_ingredients.ingredient.length)
                        {return -1}
                        else return 1;
                }

            });



            sort(sorted);

        }; 
        if(sortType !== "start") {
            sortArray(sortType);
        }
 
    }, [sortType]);

    return (
        <form className="sort">
            <label htmlFor="sort" className="sort__label">Sort</label>
            <select id="sort" name="sort" onChange={(e) => { setSortType(e.target.value) }}>
                <option value="start">Choose</option>
                <option value="name">Name</option>
                <option value="category">Category</option>
                <option value="number_of_ingredients">Number of ingredients</option>
            </select>
        </form>
    )
};

export default SortRecipes;