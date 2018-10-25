const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/user")

router.post("/", async (request, response) => {
  const body = request.body

  try {
    const user = await User.findOne({ email: body.email })
    if (user === null) {
      return response.status(401).send({ error: "invalid email or password" })
    }

    const correctPassword = await bcrypt.compare(body.password, user.passwordHash)
    if (!correctPassword) {
      return response.status(401).send({ error: "invalid email or password" })
    }
    
    const token = jwt.sign({
      user: User.format(user),
      id: user.id
    }, process.env.MY_SPECIAL_SECRET)
    
    response.status(200).json({ token, user: User.format(user) })
  } catch (exception) {
    response.status(500).json({ error: "logging in failed" })
  }
})

module.exports = router