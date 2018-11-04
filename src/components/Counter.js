import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  // Prop index is important so we know which players counter to increase/decrease!
  // let index = props.index;
  const { index, score, changeScore } = props;

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
    </div>
  );
}

// Set PropTypes for Counter component.
Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func,
}

export default Counter;
