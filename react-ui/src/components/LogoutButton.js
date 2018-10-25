import React, { Component } from "react"
import { connect } from "react-redux"
import { logout } from "../reducers/sessionReducer"

class LogoutButton extends Component {
  logout = () => {
    this.props.logout()
  }

  render() {
    return (
      <button onClick={this.logout}>
        Log out
      </button>
    );
  }
}


const mapDispatchToProps = { logout }

export default connect(null, mapDispatchToProps)(LogoutButton)
