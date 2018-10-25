const express = require("express")
const http = require("http")
const socketIo = require("socket.io")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")

const configuration = require("./utils/configuration")
const establishDatabaseConnection = require("./utils/establishDatabaseConnection")

const app = express()
const server = http.createServer(app)

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../react-ui/build')));

app.use("/api/user", require("./controllers/user"))
app.use("/api/session", require("./controllers/session"))

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
})

const io = socketIo(server)
io.on("connection", socket => {
	console.log("New client connected!")
	socket.emit("message", "Welcome to the chat.")
	socket.broadcast.emit("message", "New user joined the chat.")

	socket.on("disconnect", () => {
		console.log("A user left the chat.!")
		socket.broadcast.emit("message", "A user left the chat.")
	})

	socket.on("chat_message", msg => {
		console.log("Message: ", msg)
		socket.emit("message", msg)
		socket.broadcast.emit("message", msg)
	})
})

server.listen(configuration.port, () => {
	establishDatabaseConnection(configuration.db_url)
	console.log(`Server running on port ${configuration.port}`)
})

server.on("close", () => {
	mongoose.connection.close()
})