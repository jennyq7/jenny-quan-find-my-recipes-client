import './SortRecipes.scss';
import { useState, useEffect } from 'react';

function SortRecipes({ recipes, sort }) {

    const [sortType, setSortType] = useState('');

    //function to set up sorting by click on dropdown list items
    useEffect(() => {
        const sortArray = type => {
            const types = {
                name: 'recipe_name',
                category: 'category',
                number_of_ingredients: 'number_of_ingredients'
            };

            const sortProperty = types[type];

            //the specific sort details
            const sorted = [...recipes].sort((a, b) => {

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
                    if (a.recipe_ingredients.ingredient.length < b.recipe_ingredients.ingredient.length) { return -1 }
                    else return 1;
                }
            });
            sort(sorted);
        };
        if (sortType !== "start") {
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