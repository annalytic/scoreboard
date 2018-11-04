import React, { Component } from 'react';

/*
If state should only be available locally, create a stateful component.
If state will be handled by application, create stateless component.
*/

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  };

  handleStopwatch = () => {
    this.setState( prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() })
    }
  }

  // This method is called by React as soon as a component is inserted or mounted into the DOM.
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  // This method is called just before a component is destroyed.
  componentWillUnmount() {
    // Clears any setInterval timers.
    clearInterval(this.intervalID);
  }

  // Tick must be called continously.
  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
      }));
    }
  }

  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  }

  render() {
    const seconds = Math.floor(this.state.elapsedTime/1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">
          {seconds}
        </span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Stopwatch;
