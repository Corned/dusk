import React, { Component } from "react"
import classnames from "classnames"

import ServerButton from "./ServerButton"
import LogoutButton from "../LogoutButton"
import Modal from "../Modal"
import AnotherServer from "./AnotherServer"

import "./index.scss"

class ServerList extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      servers: [],
      showServerCreationModal: null,
    }
  }

  showServerCreationModal = () => {
    this.setState({ showServerCreationModal: true })
  }

  hideServerCreationModal = () => {
    this.setState({ showServerCreationModal: null })
  }

  render() {
    return (
      <div className="ServerList">
        { this.state.showServerCreationModal && 
          <Modal hide={this.hideServerCreationModal}>
            <AnotherServer/>
          </Modal>
        }
        <div className="ServerListButtonContainer">
          { this.state.servers.map(name => <ServerButton name={name}/>)}
          <div className="CreateServerButton" onClick={this.showServerCreationModal}/>
          <LogoutButton/>
        </div>
      </div>
    );
  }
}

export default ServerList;