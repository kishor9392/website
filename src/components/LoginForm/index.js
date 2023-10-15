import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    error: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onLogin = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const Details = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(Details),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)

    if (response.ok === true) {
      this.onLogin()
    } else {
      this.setState({error: true, username: '', password: ''})
    }
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label className="label" htmlFor="user">
          USERNAME
        </label>

        <input
          className="input"
          id="user"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="label" htmlFor="pass">
          PASSWORD
        </label>

        <input
          className="input"
          id="pass"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {error} = this.state
    return (
      <div className="log-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="log-img"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
          className="log-img1"
        />

        <form className="form-con" onSubmit={this.onSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="log-img2"
          />

          <div className="input-con">{this.renderUsername()}</div>
          <div className="input-con">{this.renderPassword()}</div>
          <button type="submit" className="button">
            Login
          </button>
          {error && <p className="error">Username is not found</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
