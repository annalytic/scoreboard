import React, { Component } from 'react';

class AddPlayerForm extends Component {
  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={(e) => {e.preventDefault();}}>
        <input
          type="text"
          value={this.state.value}
          placeholder="Enter a players name"
          onChange={this.handleValueChange}
        />
        <input
          type="submit"
          value="Add player"
          onClick={() => {this.props.addPlayer(this.state.value)}}
        />
      </form>
    );
  }
}

export default AddPlayerForm;
