const express = require("express")
const http = require("http")
const socketIo = require("socket.io")
const axios = require("axios")
const path = require("path")

const port = process.env.PORT || 3001

const app = express()

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

const server = http.createServer(app)
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

server.listen(port, () => console.log(`Listening on port ${port}`))