const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)
    this.poemTest = this.poemTest.bind(this)

    this.state = {
      poemText: "",
      valid: false
    };
  }

  handleChange(event){
    this.setState({
      poemText: event.target.value,
      valid: this.poemTest(event)
    })
  }

  poemTest(event){
    // var lineOne = this.state.poemText.split("\n")[0]
    // var lineTwo = this.state.poemText.split("\n")[1]
    // var lineThree =this.state.poemText.split("\n")[2]
    var lines = event.target.value.split("\n").map(function (line) {
      return line.trim()
    })

    var words = lines.map(function (word) {
      return word.split(" ")
    })

    if (words[0].length === 5 && words[1].length === 3 && words[2].length === 5 && lines.length === 3 ) {
      debugger
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} value={this.state.poemText}  />

        {this.state.valid ?
          null :
        <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> }

      </div>
    )
  }
}

module.exports = PoemWriter;
