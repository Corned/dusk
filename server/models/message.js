const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, Reference: "User", required: true, },
  server: { type: mongoose.Schema.Types.ObjectId, Reference: "Server", required: true },
  body: { type: String, minlength: 1, maxlength: 2048, required: true, },
  created: { type: Date, default: Date.now },
})

messageSchema.statics.format = message => {
  return message
}

module.exports = mongoose.model("Message", messageSchema)