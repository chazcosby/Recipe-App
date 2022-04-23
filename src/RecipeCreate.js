import React, { useState } from "react";

export default function RecipeCreate({ recipes, setRecipes }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [form, setForm] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value});
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, form]);
    setForm({ ...initialFormState });
  };


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
                value={form.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
                value={form.cuisine}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                required={true}
                value={form.photo}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                required={true}
                value={form.ingredients}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                placeholder="Preparation"
                required
                value={form.preparation}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

