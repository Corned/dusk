import React, { Component } from "react"
import { connect } from "react-redux"
import sessionService from "../services/sessionService"
import userService from "../services/userService"
import { login } from "../reducers/sessionReducer"

import "./LoginAndRegistration.scss"

const initialState = { 
  email: "",
  username: "", 
  password: "", 
  errors: { email: null, username: null, password: null },
  showRegisteringOptions: false,
}

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  handleSubmit = async event => {
    event.preventDefault()

    if (this.state.showRegisteringOptions) {
      try {
        await userService.register({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        })

        const { token } = await sessionService.login({
          email: this.state.email,
          password: this.state.password
        })
      
        this.props.login(token)
        this.setState(initialState)
      } catch (exception) {
        const { errors } = exception.response.data
        this.setState({ errors, password: "" })
      }
      return
    }

    try {
      const { token } = await sessionService.login({
        email: this.state.email,
        password: this.state.password
      })
    
      this.props.login(token)
      this.setState(initialState)
    } catch (exception) {
      const { errors } = exception.response.data
      this.setState({ errors, password: "" })
    }
  }

	textFieldHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  toggleShowRegistrationOpentions = (event) => {
    event.preventDefault()

    this.setState({ 
      showRegisteringOptions: !this.state.showRegisteringOptions,
      errors: { email: "", username: "", password: "" },
    })
  }

  renderLoginForm = () => {
    return (
      <div>
        <form className="LoginForm" onSubmit={this.handleSubmit}>
          <div className="FormGroup">
            <label>Email{this.state.errors.email && <span className="FormError">{this.state.errors.email}</span>}</label>
            <input 
              name="email"
              onChange={this.textFieldHandler}
              className={this.state.errors.email && "error"}
            />
          </div>
          <div className="FormGroup">
            <label>Password{this.state.errors.password && <span className="FormError">{this.state.errors.password}</span>}</label>
            <input 
              name="password"
              type="password"
              autoComplete={"new-password"}
              onChange={this.textFieldHandler}
              className={this.state.errors.password && "error"}
            />
            <a className="ForgotPassword DuskLink" href="#">Forgot your password?</a>
          </div>
          <button type="submit">Log in</button>
        </form>
  
        <p className="NeedAnAccount">Need an account? <a className="DuskLink" href="#" onClick={this.toggleShowRegistrationOpentions}>Register now!</a></p>
        
      </div>
    )
  }
  
  renderRegistrationForm = () => {
    return (
      <div>
        <form className="RegistrationForm" onSubmit={this.handleSubmit}>
          <div className="FormGroup">
            <label>Email{this.state.errors.email && <span className="FormError">{this.state.errors.email}</span>}</label>
            <input 
              name="email"
              onChange={this.textFieldHandler}
              className={this.state.errors.email && "error"}
              />
          </div>
  
          <div className="FormGroup">
            <label>Username{this.state.errors.username && <span className="FormError">{this.state.errors.username}</span>}</label>
            <input 
              name="username" 
              onChange={this.textFieldHandler}
              className={this.state.errors.username && "error"}
            />
          </div>
  
          <div className="FormGroup">
            <label>Password{this.state.errors.password && <span className="FormError">{this.state.errors.password}</span>}</label>
            <input 
              name="password"
              type="password"
              autoComplete={"new-password"}
              onChange={this.textFieldHandler}
              className={this.state.errors.password && "error"}
            />
          </div>
          <button type="submit">Sign up</button>
        </form>
  
        <p className="NeedAnAccount">Already a member? <a className="DuskLink" href="#" onClick={this.toggleShowRegistrationOpentions}>Log in here!</a></p>
      </div>
    )
  }

  render() {
    return (
      <div className="LoginAndRegistrationPage">
        { this.state.showRegisteringOptions ? this.renderRegistrationForm() : this.renderLoginForm() }        
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    "session": state.session.token
  }
}

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
