import React, { Component } from "react"

import "../styles/ChannelGroup.css"

class ChannelSelector extends Component {
  constructor(props) {
    super(props)

    this.state = { name: props.name }
  }

  toggleCollapsedState = () => {
	  this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
	  if (this.state.collapsed) {
	  	return (
        <div className="ChannelGroup">
          <p onClick={this.toggleCollapsedState}>{`> ${this.state.name}`}</p>
        </div>
      )
	  }

    return (
      <div className="ChannelGroup">
        <p onClick={this.toggleCollapsedState}>{`v ${this.state.name}`}</p>
        <div className="ChannelGroupList">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default ChannelSelector;
