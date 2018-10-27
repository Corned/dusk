import React, { Component } from "react"

import LogoutButton from "./LogoutButton"

class ServerList extends Component {
  constructor(props) {
    super(props)

    this.state = { servers: [ "Hello World", "React Developers", "r/programminghumor" ] }
  }

  render() {
    return (
      <div className="ServerList">
        <ServerButton name={"Home"} onClick={() => console.log("home")}/>
        <div className="Separator"/>
        { this.state.servers.map(name => <ServerButton name={name}/>)}
        <div className="CreateServerBlob"/>
        <LogoutButton/>
      </div>
    );
  }
}

class ServerButton extends Component {
  constructor(props) {
    super(props)

    this.state = { displayServerName: false }
  }

  onMouseEnter = () => {
    this.setState({ displayServerName: true })
  }

  onMouseLeave = () => {
    this.setState({ displayServerName: false })
  }

  render() {
    return (
      <div className="ServerBlob" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        { this.state.displayServerName && <span>{this.props.name}</span>}
      </div>
    );
  }
}

export default ServerList;