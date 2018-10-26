const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: String,
  passwordHash: String,
  admin: Boolean,
  joined: { type: Date, default: Date.now }
})

userSchema.statics.format = user => {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    admin: user.admin,
    joined: user.joined,
  }
}

module.exports = mongoose.model("User", userSchema)