const mongoose = require("mongoose")

const serverSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, maxlength: 32, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  created: { type: Date, default: Date.now },
})

serverSchema.statics.format = server => {
  return server
}

module.exports = mongoose.model("Server", serverSchema)