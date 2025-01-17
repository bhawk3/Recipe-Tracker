/* Project Description:
A recipe manager where users can 
add, edit, and delete their favorite recipes.

Save the recipes in localStorage, including details 
like ingredients and preparation steps.
*/

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  let recipeCol1 = document.getElementById("recipe-col-1")
  let recipeCol2 = document.getElementById("recipe-col-2")
  let recipeCol3 = document.getElementById("recipe-col-3")

  let recipeIngredient1 = document.getElementById("recipe-ingredient-1")
  let recipeIngredient2 = document.getElementById("recipe-ingredient-2")
  let recipeIngredient3 = document.getElementById("recipe-ingredient-3")

  let recipeList = {}

/* Add btn doesnt have event listener */
function addRecipe() {

  /* im thinking of setting the form data = to a var. something like myForm.recipe-name */

}