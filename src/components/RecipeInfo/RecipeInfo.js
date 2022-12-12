
function RecipeInfo ({recipe}) {
    console.log(recipe)
    return (
  <article>
    <h2>{recipe.recipe_name}</h2>
    <p>{recipe.recipe_description}</p>
    <img src={recipe.recipe_images.recipe_image} />
    <h3>Ingredients</h3>
       <ul>
        {recipe.ingredients.ingredient.map((ingredient, index) => {
            return (   
               <li key={index}>{ingredient.ingredient_description}</li> 
            )
        })}
       </ul>
  </article>
    )
};

export default RecipeInfo;