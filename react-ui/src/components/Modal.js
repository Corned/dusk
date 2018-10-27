import React, { Component } from "react"

import "./Modal.css"

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      open: true,
    }
  }

  close = () => {
    this.setState({ open: false })
  }

  render() {
    if (!this.state.open) {
      return null
    }

    return (
      <div className="Modal" onClick={this.close}>
        { this.props.children }
      </div>
    );
  }
}

export default Modal
