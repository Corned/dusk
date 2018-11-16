import React, { Component } from "react"
import classnames from "classnames"

import "./CreateServerDialog.scss"

class CreateServerDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      serverName: "",
      serverIcon: null,
      serverRegion: null
    }
  }

  render() {
    const CreateServerDialogClasses = classnames(
      "CreateServerDialog",
      {
        "show": this.props.show,
        "hidden": this.props.show === false
      }
    )

    return (
      <div className={CreateServerDialogClasses}>
        <h1 className="DialogTitle Blue">CREATE YOUR SERVER</h1>
        <p className="DialogTitleDescription">By creating a server, you will have access to free voice and text chat to use amongst your friends.</p>

        <div className="InstantInviteInputForm">
          <input>
          </input>
          <p>Enter a server name</p>
        </div>
        <div className="JoinNewServerSubmitDiv">
          <button className="ActionBackButton" onClick={this.props.f_hide}>Back</button>
          <button className="ActionButton Blue">Create</button>
        </div>
      </div>
    )
  }
}

export default CreateServerDialog
