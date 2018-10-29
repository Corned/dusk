import React, { Component } from "react"
import { connect } from "react-redux"

import { login } from "./reducers/sessionReducer"

import ServerList from "./components/ServerList/index"
import ChatContainer from "./components/Server/ChatContainer"

import LoginAndRegistration from "./components/LoginAndRegistration"

import "./App.scss"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { }
  }

  componentDidMount() {
    const token = window.localStorage.getItem("DUSK-token")
    if (token) {
      this.props.login(token)
    }
  }

  render() {
    if (this.props.session === null) {
      return (
        <div className="App">
          <LoginAndRegistration/>
        </div>
      )
    }

    return (
      <div className="App">
        <ServerList/>
        <ChatContainer/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    "session": state.session.token
  }
}

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(App);
