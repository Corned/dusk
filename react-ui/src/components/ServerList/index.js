import React, { Component } from "react"

import ServerButton from "./ServerButton"
import LogoutButton from "../LogoutButton"
import Modal from "../Modal"

import "./index.css"

class ServerList extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      servers: [],
    }
  }

  render() {
    return (
      <div className="ServerList">
        <Modal/>
        <div className="ServerListButtonContainer">
          { this.state.servers.map(name => <ServerButton name={name}/>)}
          <div className="CreateServerButton"/>
          <LogoutButton/>
        </div>
      </div>
    );
  }
}

export default ServerList;