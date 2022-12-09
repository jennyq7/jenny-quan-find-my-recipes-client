import axios from 'axios';
import { useEffect, useState } from 'react';
import './Recipe.scss';
import { useParams} from 'react-router-dom';

function Recipe () {


const { id } = useParams();

const [recipeData, setRecipeData] = useState(null);


    useEffect(() => {
        if(id === null) return;
        axios.get(`http://localhost:8080/recipes/${id}`)
        .then(response => {
            const results = response.data;
   
    }).catch(err => {console.log(err)})
    },[])



    return (
        <>
        
        </>
    )
};

export default Recipe;