import React, { Component } from "react"

import ServerList from "./components/ServerList"
import ChannelList from "./components/ChannelList"
import ChatContainer from "./components/ChatContainer"
import MemberList from "./components/MemberList"
import "./styles/App.css"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
  }

  render() {
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
  }
}

export default App;
