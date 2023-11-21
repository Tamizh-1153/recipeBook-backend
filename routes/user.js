const express = require("express")
const router = express.Router()
const authenticateUser = require("../middleware/authentication")

const {
  login,
  register,
  forgotPassword,
  resetPassword,
  getUserInfo,
  toggleFavoriteRecipes,
  getAllFav,
} = require("../controllers/user")

router.route("/login").post(login)
router.route("/register").post(register)
router.route("/forgot_password").post(forgotPassword)
router.route("/reset_password/:id/:token").post(resetPassword)
router.route("/user/info").get(authenticateUser, getUserInfo)
router.route("/toggleFav/:id").post(authenticateUser,toggleFavoriteRecipes)
router.route('/getAllFav').get(authenticateUser,getAllFav)

module.exports = router
