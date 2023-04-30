import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = "3217bbff";
  const APP_KEY = "d8b6e93ce7df2c4f7ff56206c1da858d"

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();

  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }
  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className="search-form">
        <input className='search-bar' type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
