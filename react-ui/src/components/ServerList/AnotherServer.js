import React, { Component } from "react"
import classnames from "classnames"

import JoinServerDialog from "./JoinServerDialog"
import CreateServerDialog from "./CreateServerDialog"

import "./AnotherServer.scss"

class AnotherServer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showServerCreation: null,
      showServerJoining: null,
    }
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
      "DialogChooseAction",
      {
        "show": this.state.showServerCreation === false || this.state.showServerJoining === false,
        "hidden": this.state.showServerCreation || this.state.showServerJoining
      }
    )

    return (
      <div className="NewServerDialog">
        <div className={NewServerDialogChooseActionClasses}>
          <h1 className="DialogTitle Blue">OH, ANOTHER SERVER HUH?</h1>
          <div className="Actions">
            <div className="ActionCreate" onClick={this.showServerCreationTab}>
              <p className="ActionTitle Blue">CREATE</p>
              <p className="ActionDescription">
                Create a new server and invite your friends. It's free!
              </p>
              <button className="ActionButton Blue">Create a server</button>
            </div>
            <div className="ActionJoin" onClick={this.showServerJoiningTab}>
              <p className="ActionTitle Green">Join</p>
              <p className="ActionDescription">
                Enter an Instant Invite and join your friend's server.
              </p>
              <button className="ActionButton Green">Join a server</button>
            </div>
          </div>
        </div>

        <JoinServerDialog
          show={this.state.showServerJoining}
          f_hide={this.hideServerJoiningTab}
        />

        <CreateServerDialog
          show={this.state.showServerCreation}
          f_hide={this.hideServerCreationTab}
        />
      </div>
    )
  }
}

export default AnotherServer