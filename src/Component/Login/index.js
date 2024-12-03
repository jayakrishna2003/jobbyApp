import './index.css'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showSubmitMsg: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          value={username}
          id="username"
          className="input-field"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          value={password}
          id="password"
          className="input-field"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {errorMsg, showSubmitMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="bg-container">
        <div className="jobby-app-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {showSubmitMsg && <p className="error-message">*{errorMsg}</p>}
        </div>
      </div>
    )
  }
}

export default Login
