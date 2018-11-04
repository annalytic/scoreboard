import React, { Component } from 'react';

// class AddPlayerForm extends Component {
//   state = {
//     value: ''
//   }
//
//   handleValueChange = (e) => {
//     this.setState({
//       value: e.target.value
//     });
//   }
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//     // Sends this.state.value to callback handleAddPlayer in App.js through prop addPlayer
//     this.props.addPlayer(this.state.value);
//     // Clear text field when user submits name
//     this.setState({ value: '' });
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.value}
//           placeholder="Enter a players name"
//           onChange={this.handleValueChange}
//         />
//         <input
//           type="submit"
//           value="Add player"
//         />
//       </form>
//     );
//   }
// }

// USING REACT REFS
class AddPlayerForm extends Component {
  playerInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    // Sends this.state.value to callback handleAddPlayer in App.js through prop addPlayer
    this.props.addPlayer(this.playerInput.current.value);
    // Clear text field when user submits name
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={this.playerInput}
          type="text"
          placeholder="Enter a players name"
        />
        <input
          type="submit"
          value="Add player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;
