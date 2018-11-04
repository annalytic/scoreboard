import React from 'react';

// External dependencies
import PropTypes from 'prop-types';

const Stats = (props) => {
  const { players } = props;

  // array.prototype.reduce method.
  const totalPoints = players.reduce( (total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{players.length}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object)
  // Alternatively can specify even further like this:
  // players: PropTypes.arrayOf(PropTypes.shape({
  //   score: PropTypes.number
  // }))
}

export default Stats;
