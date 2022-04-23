import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

export default function App() {
  const [recipes, setRecipes] = useState(RecipeData);


  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
      <RecipeCreate recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}
