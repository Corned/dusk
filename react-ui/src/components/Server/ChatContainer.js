import React, { Component } from "react"
import { connect } from "react-redux"

import Message from "./Message"

import "./ChatContainer.scss"

import socketIOClient from "socket.io-client"

const initialState = { 
  message: "", 
  messages: [], 
  socket: null,
}

class ChatContainer extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  componentDidMount() {
    const endpoint = "/"
    const socket = socketIOClient(endpoint)

    socket.on("message", (data) => {
      this.setState({ messages: [ ...this.state.messages, data ] })
    })

    this.setState({ socket })
  }

  componentWillUnmount() {
    this.state.socket.close()
    this.setState(initialState)
  }

  onChange = (event) => {
    this.setState({ message: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.state.socket.emit("chat_message", {
      message: this.state.message,
      authentication_token: this.props.session,
    })

    this.setState({ message: "" })
  }

  render() {
    return (
      <div className="ChatContainer">
        <div className="ChatMessageList">
          { this.state.messages.map(({ message, user }) => <Message username={user ? user.username : "Server"} body={message}/> )}
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

const mapStateToProps = (state) => {
  return {
    "session": state.session.token
  }
}

export default connect(mapStateToProps, null)(ChatContainer);
