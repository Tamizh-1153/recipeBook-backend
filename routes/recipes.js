const express = require('express')
const router = express.Router()
const authenticateUser = require("../middleware/authentication")

const { getAllRecipes, getRecipeById, addCommentToRecipe, addRecipe, myRecipes } = require('../controllers/recipes')

router.route('/all').get(getAllRecipes)
router.route(`/:id`).get(getRecipeById)
router.route(`/:id`).post(addCommentToRecipe)
router.route(`/add/new`).post(addRecipe)
router.route('/user/all').get(authenticateUser,myRecipes)

module.exports = router