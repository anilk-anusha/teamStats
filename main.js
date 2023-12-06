const team = {
  _players: [
    { firstName: "Randy", lastName: "Till", age: 43 },
    { firstName: "Olet", lastName: "Pill", age: 23 },
    { firstName: "Tim", lastName: "Hort", age: 54 },
  ],
  _games: [
    { opponent: "Pingu", teamPoints: 42, opponentPoints: 27 },
    { opponent: "Kites", teamPoints: 45, opponentPoints: 12 },
    { opponent: "Bad man", teamPoints: 31, opponentPoints: 15 },
  ],
  // get method
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  //method to add player
  addPlayer(newfirstName, newLastName, newAge) {
    let player = {
      firstName: newfirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  //method to add game
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

// Adding new player
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

//Adding new game
team.addGame('Bugs', 67, 76);
console.log(team.games);