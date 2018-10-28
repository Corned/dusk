const express = require("express")
const http = require("http")
const socketIo = require("socket.io")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const jwt = require("jsonwebtoken")

const configuration = require("./utils/configuration")
const establishDatabaseConnection = require("./utils/establishDatabaseConnection")

const app = express()
const server = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../react-ui/build')));

app.use("/api/user", require("./controllers/user"))
app.use("/api/session", require("./controllers/session"))

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
})

const io = socketIo(server)
io.on("connection", socket => {
	socket.emit("message", {
		message: "A user has joined the chat!"
	})
	
	socket.broadcast.emit("message", {
		message: "A user has joined the chat!"
	})

	socket.on("disconnect", () => {
		socket.broadcast.emit("message", {
			message: "A user has left the chat.."
		})
	})

	socket.on("chat_message", ({ message, authentication_token }) => {
		const decodedToken = jwt.verify(authentication_token, process.env.MY_SPECIAL_SECRET)
		if (!decodedToken || !decodedToken.user) {
			return
		}

		socket.emit("message", { user: decodedToken.user, message })
		socket.broadcast.emit("message", { user: decodedToken.user, message })
	})
})

server.listen(configuration.port, () => {
	establishDatabaseConnection(configuration.db_url)
	console.log(`Server running on port ${configuration.port}`)
})

server.on("close", () => {
	mongoose.connection.close()
})