const router = require("express").Router()
const User = require("../models/user")

const emailValidator = require("email-validator")
const bcrypt = require("bcryptjs")

router.get("/", async (request, response) => {
  const users = await User.find({})
  
	response.status(200).json(users.map(User.format))
})

// new user
router.post("/", async (request, response) => {
  const body = request.body
  let email = body.email || ""
  let username = body.username || ""
  let password = body.password || ""

	try {
    let errors = { email: null, username: null, password: null }

    const usersWithUsername = await User.count({ username: username })

    if (!emailValidator.validate(email)) errors.email = "Fill in a valid email"
    if (usersWithUsername > 0) errors.username = "Username is already taken"
    if (username.length < 3 || username.length > 32) errors.username = "must be between 3 and 32 characters long"
    if (password.length < 6 || password.length > 64) errors.password = "must be between 6 and 64 characters long"

    if (errors.email || errors.username || errors.password) {
      return response.status(400).json({ errors })
    }

		const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

		const user = new User({
      email,
      username,
      passwordHash,
      admin: false,
		})

		const savedUser = await user.save()
		response.status(201).json({ user: User.format(savedUser) }) 
	} catch (exception) {
		console.log(exception)
		response.status(500).json({ error: exception })
	}
})

module.exports = router