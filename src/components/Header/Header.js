import './Header.scss';
import {Link} from 'react-router-dom';

function Header () {
    return (
        <header className="header">
            <Link to="/recipes"><h1>FIND MY RECIPES</h1></Link>
        </header>
    )
};

export default Header;


{/* <div className="saved__recipes">
{savedRecipe.map((item) => {
    return(  (item.recipe).map((recipe) => {
      return (
          <div className="saved__recipes-ind" key={recipe.recipe_id}>
             <h4>{recipe.recipe_name}</h4>
             <p>{recipe.recipe_images}</p>     
          </div>
      ) })
)   })}
</div> */}
