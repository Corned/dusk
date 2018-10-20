import React, { Component } from "react"
import Message from "./Message"

import "../styles/ChatContainer.css"


import socketIOClient from "socket.io-client"

class ChatContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { message: "", messages: [], socket: null }
  }

  componentDidMount() {
    const endpoint = "/"
    const socket = socketIOClient(endpoint)
    socket.on("message", data => this.setState({ messages: [ ...this.state.messages, data ] }))

    this.setState({ socket })
  }

  onChange = (event) => {
    this.setState({ message: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.state.socket.emit("chat_message", this.state.message)
    console.log("EMIT")

    this.setState({ message: "" })
  }

  render() {
    return (
      <div className="ChatContainer">
        <div className="ChatMessageList">
          { this.state.messages.map(message => <Message username="Anon" body={message}/>) }
        </div>
        <div className="ChatInputContainer">
          <div className="Divider"/>
          <form onSubmit={this.onSubmit}>
            <input 
              className="ChatInput"
              placeholder="Message #general"
              onChange={this.onChange}
              value={this.state.message}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ChatContainer;
