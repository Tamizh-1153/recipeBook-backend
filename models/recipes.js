const mongoose = require("mongoose")

const recipesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  prepTime: {
    type: String,
  },
  cookTime: {
    type: String,
  },
  serves: {
    type: Number,
  },
  difficulty: {
    type: String,
  },
  cuisine: {
    type: String,
  },
  image:{
    type: String,
  },
  recipeBy: {
    type: String,
  },
  ingredients: {
    type: [String],
  },
  directions: {
    type: [String],
  },
  comments: {
    type: [Object],
  },
  addedBy:{
    type: String,
  }
},{
    timestamps:true
})

module.exports = mongoose.model("Recipes", recipesSchema)
