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
      showServerCreationModal: false,
    }
  }

  showServerCreationModal = () => {
    this.setState({ showServerCreationModal: true })
  }

  hideServerCreationModal = () => {
    this.setState({ showServerCreationModal: false })
  }

  render() {
    return (
      <div className="ServerList">
        { this.state.showServerCreationModal && 
          <Modal hide={this.hideServerCreationModal}>
            <div className="ServerCreationDialog">
              <h1>OH, ANOTHER SERVER HUH?</h1>
            </div>
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