import React, { Component } from "react"

import "../styles/ChannelSelector.css"

class ChannelSelector extends Component {
  constructor(props) {
    super(props)

    this.state = { type: props.type, name: props.name }
  }

  render() {
    return (
      <div className="ChannelSelector">
        <p className="ChannelSelectorTypeIndicator">#</p>
        <p className="ChannelSelectorName">{this.state.name}</p>
      </div>
    );
  }
}

export default ChannelSelector;
