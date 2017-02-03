const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      msg: ""
    };
  }

  handleChange(event){
    this.setState({
      msg: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.msg} onChange={this.handleChange}/>
          {this.props.maxChars - this.state.msg.length}
      </div>
    );
  }
}

module.exports = TwitterMessage
