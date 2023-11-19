const Recipes = require("../models/recipes")

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find().sort({ updatedAt: -1 })
    res.json(recipes)
  } catch (error) {
    res.json(error.message)
  }
}

const getRecipeById = async (req, res) => {
  const { id } = req.params

  try {
    const recipe = await Recipes.findById(id)
    res.json(recipe)
  } catch (error) {
    res.json(error.message)
  }
}

const addCommentToRecipe = async (req, res) => {
  const { id } = req.params
  const { addCommentToServer } = req.body
  console.log(addCommentToServer)
  try {
    const recipe = await Recipes.findOneAndUpdate(
      { _id: id },
      { $push: { comments: addCommentToServer } },
      { new: true }
    )
    res.json(recipe)
  } catch (error) {
    res.json(error.message)
  }
}

const addRecipe = async (req, res) => {
  const { recipeDetails } = req.body
  try {
    const recipe = await Recipes.create({ ...recipeDetails })
    res.json(recipe)
  } catch (error) {
    res.json(error.message)
  }
}

const myRecipes = async (req, res) => {
  const { email } = req.user

  try {
    const recipes = await Recipes.find({ addedBy: email })
    res.json(recipes)
  } catch (error) {
    res.json(error.message)
  }
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  addCommentToRecipe,
  addRecipe,
  myRecipes,
}
