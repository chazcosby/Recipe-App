import React from "react";
import ChangeRecipe from "./ChangeRecipe";

export default function RecipeList({ recipes, setRecipes }) {

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <ChangeRecipe recipes={recipes} setRecipes={setRecipes} />
        </tbody>
      </table>
    </div>
  );
}
