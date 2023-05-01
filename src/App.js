import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = "3217bbff";
  const APP_KEY = "d8b6e93ce7df2c4f7ff56206c1da858d"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getRecipes();

  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form onSubmit={getSearch} className="search-form">
        <input 
        className='search-bar' 
        type="text" 
        value={search} 
        onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          // ingredients={recipe.recipe.ingredients}
          />
      ))}
    </div>
  );
}

export default App;
