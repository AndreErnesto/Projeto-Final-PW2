import React,{useEffect, useState} from "react";
import Recipe from './recipe';
import "./App.css";

/* Use Effect dá fecth da API e a useState usa-a */

const Recipes = () =>{
    const APP_ID = "f4221e67";
    const APP_KEY = "166596d698ce89c3ca27985684000420";
  
    const[recipes, setRecipes] = useState([]);
    const[search, setSearch] = useState('');
    const[query, setQuery] = useState('');
  
    useEffect(() => { 
      getRecipes();    
    }, [query]);
  
    const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =await response.json(); 
    setRecipes(data.hits);
    /* console.log(data.hits); */
    }
  
  
    const updateSearch = e =>{
      setSearch(e.target.value);
    }
  
    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }

   return(
      
    <div className="Recipes">

      <h1 className="title">Search for the food</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit"> Search </button>
      </form> 
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
};

export default Recipes;