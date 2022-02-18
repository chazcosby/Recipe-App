import React from "react";

export default function ChangeRecipe({ recipes, setRecipes }) {
  const handleDelete = (id) => {
    setRecipes([...recipes].filter((recipe, index) => id !== index));
  };
  const recipeItems = recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={index}>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} alt={photo} />
        </td>
        <td className="content_td"><p>{ingredients}</p></td>
        <td className="content_td"><p>{preparation}</p></td>
        <td>
          <button name="delete" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </td>
      </tr>
    )
  );
  return <>{recipeItems}</>;
}