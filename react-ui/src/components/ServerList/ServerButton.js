import React, { Component } from "react"

import "./ServerButton.css"

class ServerButton extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      displayServerName: false,
    }
  }

  onMouseEnter = () => {
    this.setState({ displayServerName: true })
  }

  onMouseLeave = () => {
    this.setState({ displayServerName: false })
  }

  render() {
    return (
      <div className="ServerButton" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <p className="ServerNameAcronym">{this.props.name.split(" ").map(s => s[0]).join("")}</p>
        { /* this.state.displayServerName && <span className="ServerNameTip">{this.props.name}</span> */ }
      </div>
    );
  }
}

export default ServerButton