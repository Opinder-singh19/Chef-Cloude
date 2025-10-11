import { useState } from "react";


export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(""); 

  const ingredientList = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }

  function getRandomRecipe() {
    const recipes = [
      "Tomato Pasta: Boil 200g of pasta in salted water until al dente. In a pan, heat olive oil, sauté chopped onions and garlic until fragrant. Add diced tomatoes and cook until soft, then stir in tomato sauce and season with salt, pepper, and oregano. Mix the cooked pasta with the sauce and serve hot with a sprinkle of grated cheese on top.",
  
  "Omelette: Crack 3 eggs into a bowl and whisk well with a pinch of salt and pepper. Heat butter in a non-stick pan and sauté chopped onions, bell peppers, and tomatoes until slightly soft. Pour in the eggs and cook gently until set, folding the omelette halfway. Serve warm, optionally with fresh herbs like parsley or chives.",
  
  "Fruit Salad: Chop a variety of fruits such as apples, bananas, strawberries, and grapes into bite-sized pieces. In a small bowl, mix honey, lemon juice, and a pinch of cinnamon. Drizzle the mixture over the fruits and toss gently. Chill in the refrigerator for 10–15 minutes and serve fresh.",
  
  "Grilled Cheese Sandwich: Take two slices of bread and spread butter on one side of each. Place cheese slices between the bread with the buttered sides out. Heat a skillet over medium heat and grill the sandwich until the bread is golden brown and the cheese melts. Serve hot with ketchup or tomato soup.",
  
  "Vegetable Stir Fry: Heat sesame oil in a wok and add minced garlic and ginger. Toss in chopped vegetables like broccoli, carrots, bell peppers, and snow peas, and stir fry for 5–7 minutes. Add soy sauce, a dash of sesame seeds, and a little honey for flavor. Cook until vegetables are tender-crisp and serve with steamed rice or noodles."
    ];
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    setRecipe(random);
  }

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addIngredient(new FormData(e.target));
          e.target.reset();
        }}
        className="add-ingredient-form"
      >
        <input type="text" name="ingredient" placeholder="E.g. Oregano" />
        <button>Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientList}
          </ul>

          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={getRandomRecipe}>Get a recipe</button>
            </div>
          )}

         
          {recipe && (
            <>
             <p className="para">
  Here’s a delicious recipe you can try with your ingredients. It’s simple, quick, and perfect for 
  anyone who loves experimenting in the kitchen. Gather your ingredients and get ready to cook 
  something tasty and satisfying. You guys must see how easy it is to make a yummy dish ....!
</p>
              <div className="recipe-output">
                <p>{recipe}</p>
              </div>
            </>
          )}
        </section>
      )}
    </main>
  );
}
