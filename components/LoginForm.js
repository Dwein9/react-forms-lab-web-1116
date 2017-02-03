const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.inputUsername = this.inputUsername.bind(this)
    this.inputPassword = this.inputPassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: '',
      password: '',
    };
  }

  inputUsername(event){
    this.setState({
      username: event.target.value,
    })
  }

  inputPassword(event){
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit(event){
    event.preventDefault()
    if (!this.state.username || !this.state.password) {
        return null
    } else {
    this.props.onSubmit(this.state) }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.inputUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.inputPassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
