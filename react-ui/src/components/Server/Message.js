import React, { Component } from "react"
import "./Message.css"

class Message extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      username: props.username, 
      body: props.body,
    }
  }

  render() {
    return (
      <div className="Message">
        <p>
          <span className="MessageAuthor">{this.state.username}</span>
          <span className="MessageBody">: {this.state.body}</span>
        </p>
      </div>
    );
  }
}

export default Message;
