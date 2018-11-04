import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        // "Score" state is initialized in players array!
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  // Handles removing of player
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  // Gets highscore if there is one.
  getHighScore = () => {
    const scores = this.state.players.map( p => p.score )
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  // Handles updating of score for each player.
  // We list "score" state of Counter component to App.
  /* When I first created the Counter component the score was a local
    state of Counter. But since we need the state info in Header Component
    to display total amount of score for all players, we "lifted state" to
    parent component (App). The increment/decrement of score now has to be
    handles by App.
  */
  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      return {
        // Don't quite understand why I can call it whatever I want..
        score: prevState.players[index].score += delta
      }
    });
  }

  // Handles adding a new player to scoreboard
  handleAddPlayer = ( name ) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name, // When key and value match, can drop value
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

  // player id Counter
  prevPlayerId = 4;

  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header
          title="My Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            // If high score is players score.
            isHighScore={highScore === player.score}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
