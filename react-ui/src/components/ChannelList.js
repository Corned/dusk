import React, { Component } from "react"
import ChannelSelector from "./ChannelSelector"
import ChannelGroup from "./ChannelGroup"


class ChannelList extends Component {
  constructor(props) {
    super(props)

    this.state = { }
  }

  render() {
    return (
      <div className="Channels">
        <ChannelSelector name="rules"/>
        <ChannelSelector name="general"/>
        <ChannelSelector name="off-topic"/>
        <ChannelSelector name="polls"/>

        <ChannelGroup name={"Administrator"}>
          <ChannelSelector name="chat"/>
          <ChannelSelector name="logs"/>
          <ChannelSelector name="memes"/>
        </ChannelGroup>

        <ChannelGroup name={"Miscellaneous"}>
          <ChannelSelector name="bot-commands"/>
          <ChannelSelector name="game-night"/>
          <ChannelSelector name="non-english"/>
          <ChannelSelector name="other-servers"/>
          <ChannelSelector name="audio-text"/>
        </ChannelGroup>     
      </div>  
    );
  }
}

export default ChannelList;
