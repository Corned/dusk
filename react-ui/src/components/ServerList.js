import React, { Component } from "react"

import LogoutButton from "./LogoutButton"

class ServerList extends Component {
  constructor(props) {
    super(props)

    this.state = { }
  }

  render() {
    return (
      <div className="ServerList">
        <div className="ServerBlob"/>
        <div className="Separator"/>
        <div className="ServerBlob"/>
        <div className="ServerBlob"/>
        <div className="CreateServerBlob"/>
        <LogoutButton/>
      </div>
    );
  }
}

export default ServerList;