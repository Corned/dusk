import React, { Component } from "react"
import classnames from "classnames"

import "./JoinServerDialog"

class JoinServerDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      invite: ""
    }
  }

  render() {
    const JoinServerDialogClasses = classnames(
      "JoinServerDialog",
      {
        "show": this.props.show,
        "hidden": this.props.show === false
      }
    )

    return (
      <div className={JoinServerDialogClasses}>
        <h1 className="DialogTitle Green">JOIN A SERVER</h1>
        <p className="DialogTitleDescription">Enter an Instant Invite below to join an existing server. The invite will look something like these:</p>
        <div className="InstantInviteExamples">
          <p>https://discord.gg/qJq5c</p>
          <p>https://discord.gg/discord-developers</p>
          <p>qJq5c</p>
        </div>
        <div className="InstantInviteInputForm">
          <input/>
          <p>Enter an Instant Invite</p>
        </div>
        <div className="JoinNewServerSubmitDiv">
          <button className="ActionBackButton" onClick={this.props.f_hide}>Back</button>
          <button className="ActionButton Green">Join</button>
        </div>
      </div>
    )
  }
}

export default JoinServerDialog