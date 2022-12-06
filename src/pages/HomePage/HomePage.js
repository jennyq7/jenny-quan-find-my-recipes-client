import './HomePage.scss';
import { useState } from 'react';
import axios from 'axios';

function HomePage () {

  const [recipes, setRecipes] = useState(null);

  
    
    return (
        <main className="main">
            <h3>Welcome to my site!</h3>
            <p>Feel free to browse the below recipes or use the sort or filter options to search by your desired criteria</p>

        </main>
    )
};

export default HomePage;