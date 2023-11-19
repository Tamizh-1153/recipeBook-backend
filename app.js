const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")


// database
const connectDB = require("./db/connectDB")

// routes
const userRouter = require("./routes/user")
const recipeRouter = require("./routes/recipes")

app.use(express.json())
app.use(cors())
app.use("/api/v1", userRouter)
app.use("/api/v1/recipe", recipeRouter)
app.get("/", (req, res) => {
  res.send("Recipe book website backend")
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(5000, () => console.log("Server is listening on port 5000..."))
  } catch (error) {
    console.log(error)
  }
}

start()
