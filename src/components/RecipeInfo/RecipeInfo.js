import './RecipeInfo.scss';
function RecipeInfo ({recipe}) {
   
    return (
  <article className="savedRecipe">
    <h2 className="savedRecipe__title">{recipe.recipe_name}</h2>
    <p>{recipe.recipe_description}</p>
    <div className="savedRecipe__container">
      <img src={recipe.recipe_images.recipe_image} className="savedRecipe__container-img"/>
    </div>
    <h3 className="savedRecipe__ingredients">Ingredients</h3>
       <ul className="savedRecipe__ingredients-list">
        {recipe.ingredients.ingredient.map((ingredient, index) => {
            return (   
               <li key={index}>{ingredient.ingredient_description}</li> 
            )
        })}
       </ul>
    <div className="savedRecipe__tag">
      <a href="https://platform.fatsecret.com">
        <img src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png" srcSet="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_2x.png 2x, https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_3x.png 3x" border="0"/>
      </a>	
    </div>   
  </article>
    )
};

export default RecipeInfo;