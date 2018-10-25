import React, { Component } from "react"
import { connect } from "react-redux"

import { login, logout } from "./reducers/sessionReducer"

import ServerList from "./components/ServerList"
import ChannelList from "./components/ChannelList"
import ChatContainer from "./components/ChatContainer"
import MemberList from "./components/MemberList"

import LoginAndRegistration from "./components/LoginAndRegistration"

import "./styles/App.css"

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
    //if (this.props.session === null) {
      return (
        <div className="App">
          <LoginAndRegistration/>
        </div>
      )
    //}

  /*

    return (
      <div className="App">
        <ServerList/>
        <div className="ServerView">
          <div className="ActionBar">
            <div className="ServerSettings">
              <p>Epic People Only</p>
            </div>
            <div className="ActionBarChannelName">
              <p className="ChannelSelectorTypeIndicator">#</p>
              <p className="ChannelSelectorName">lounge</p>
            </div>
          </div>
          <div className="ServerContainer">
            <ChannelList/>
            <ChatContainer/>
            <MemberList/>
          </div>
        </div>
      </div>
    );

  */

  }
}

const mapStateToProps = (state) => {
  return {
    "session": state.session.token
  }
}

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(App);
