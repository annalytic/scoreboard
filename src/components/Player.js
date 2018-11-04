/* Rewrote Component to PureComponent,
to stop React from rerendering every player
when their props and state is not changed!
*/
import React, { PureComponent } from 'react';

// External dependencies
import PropTypes from 'prop-types';

// Components
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
  // When working with classes it's not unusual to see PropTypes defined in class using static keyword.
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    isHighScore: PropTypes.bool,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render() {
    const {
      name,
      id,
      score,
      index,
      changeScore,
      removePlayer,
      isHighScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>

          <Icon
            isHighScore={isHighScore}
          />
          { name }
        </span>

        <Counter
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;
