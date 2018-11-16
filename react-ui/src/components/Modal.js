import React, { Component } from "react"
import classnames from "classnames"

import "./Modal.scss"

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = { }
  }

  handleHide = (event) => {
    event.preventDefault()
    if (event.target === event.currentTarget) {
      this.props.f_hide()
    }
  }

  render() {
    const classes = classnames(
      "Modal",
      {
        "show": this.props.show,
        "hide": this.props.show === false
      }
    )

    return (
      <div className={classes} onClick={this.handleHide}>
        { this.props.children }
      </div>
    );
  }
}

export default Modal
