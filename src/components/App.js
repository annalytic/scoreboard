import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
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

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScore = (index, delta) => {
    this.setState( prevState => {
      return {
        score: prevState.players[index].score += delta
      }
    });
  }

  handleAddPlayer = ( value ) => {
    this.setState( prevState => {
      let newPlayer = {
        name: value,
        score: 0,
        id: prevState.players.length + 1
      }
      return {
        players: [ ...prevState.players, newPlayer ]
      }
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
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
            changeScore={this.handleScore}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
