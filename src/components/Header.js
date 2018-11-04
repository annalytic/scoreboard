import React from 'react';

// External dependencies
import PropTypes from 'prop-types';

// Components
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
  // Deconstructing props. Can alternatively write this:
  // const Header = ({ players, title }) => {..}
  const { players, title } = props;
  return (
    <header>
      <Stats players={ players } />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

// Set propTypes for Header props.
Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
}

// Set default values for Header props.
Header.defaultProps = {
  title: 'Scoreboard' // Sets default if not specified by parent App component.
}

export default Header;
