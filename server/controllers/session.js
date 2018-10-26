const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/user")

router.post("/", async (request, response) => {
  const body = request.body
  const email = body.email || ""
  const password = body.password || ""

  const errors = { email: null, password: null }

  try {
    const user = await User.findOne({ email })
    if (user === null) {
      return response.status(400).json({ errors: { email: "Invalid username or password" } })
    }

    const correctPassword = await bcrypt.compare(password, user.passwordHash)
    if (!correctPassword) {
      return response.status(400).json({ errors: { email: "Invalid username or password" } })
    }
    
    const token = jwt.sign({
      user: User.format(user),
      id: user.id
    }, process.env.MY_SPECIAL_SECRET)
    
    response.status(200).json({ token, user: User.format(user) })
  } catch (exception) {
    errors.email = "Something went wrong"
    console.log(exception)
    response.status(500).json({ errors })
  }
})

module.exports = router