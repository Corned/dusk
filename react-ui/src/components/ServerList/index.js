import React, { Component } from "react"
import classnames from "classnames"

import ServerButton from "./ServerButton"
import LogoutButton from "../LogoutButton"
import Modal from "../Modal"

import "./index.css"

class ServerList extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      servers: [],
      showServerCreationModal: null,
      showServerCreation: null,
      showServerJoining: null,
    }
  }

  showServerCreationModal = () => {
    this.setState({ showServerCreationModal: true })
  }

  hideServerCreationModal = () => {
    this.setState({ 
      showServerCreationModal: null,
      showServerCreation: null,
      showServerJoining: null, 
    })
  }

  showServerCreationTab = () => {
    this.setState({ showServerCreation: true })
  }

  showServerJoiningTab = () => {
    this.setState({ showServerJoining: true })
  }

  hideServerCreationTab = () => {
    this.setState({ showServerCreation: false })
  }

  hideServerJoiningTab = () => {
    this.setState({ showServerJoining: false })
  }

  render() {
    const NewServerDialogChooseActionClasses = classnames(
      "NewServerDialogChooseAction",
      {
        "show": this.state.showServerCreation === false || this.state.showServerJoining === false,
        "hidden": this.state.showServerCreation || this.state.showServerJoining
      }
    )
    const CreateServerDialogClasses = classnames(
      "CreateServerDialog",
      {
        "show": this.state.showServerCreation,
        "hidden": this.state.showServerCreation === false
      }
    )

    const JoinServerDialogClasses = classnames(
      "JoinServerDialog",
      {
        "show": this.state.showServerJoining,
        "hidden": this.state.showServerJoining === false
      }
    )

    return (
      <div className="ServerList">
        { this.state.showServerCreationModal && 
          <Modal hide={this.hideServerCreationModal}>
            <div className="NewServerDialog">
              <div className={NewServerDialogChooseActionClasses}>
                <h1>OH, ANOTHER SERVER HUH?</h1>
                <div className="NewServerActions">
                  <div className="NewServerActionCreate" onClick={this.showServerCreationTab}>
                    <p className="NewServerActionTitle Blue">CREATE</p>
                    <p className="NewServerActionDescription">
                      Create a new server and invite your friends. It's free!
                    </p>
                    <button className="NewServerActionButton Blue">Create a server</button>
                  </div>
                  <div className="NewServerActionJoin" onClick={this.showServerJoiningTab}>
                    <p className="NewServerActionTitle Green">Join</p>
                    <p className="NewServerActionDescription">
                      Enter an Instant Invite and join your friend's server.
                    </p>
                    <button className="NewServerActionButton Green">Join a server</button>
                  </div>
                </div>
              </div>
              <div className={CreateServerDialogClasses} onClick={this.hideServerCreationTab}>
              </div>
              <div className={JoinServerDialogClasses} onClick={this.hideServerJoiningTab}>
              </div>
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