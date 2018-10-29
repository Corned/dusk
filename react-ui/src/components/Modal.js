import React, { Component } from "react"

import "./Modal.scss"

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = { }
  }

  handleHide = (event) => {
    event.preventDefault()
    if (event.target === event.currentTarget) {
      this.props.hide()
    }
  }

  render() {
    return (
      <div className="Modal" onClick={this.handleHide}>
        { this.props.children }
      </div>
    );
  }
}

export default Modal
