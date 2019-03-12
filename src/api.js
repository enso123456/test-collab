// THIS FILE SHOULD NOT BE MODIFIED!!!
const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G", gamesPlayed: "3" },
    { number: 2, name: "Dave Defender", position: "D", gamesPlayed: "2" },
    { number: 3, name: "Sam Sweeper", position: "D", gamesPlayed: "91" },
    { number: 4, name: "Matt Midfielder", position: "M", gamesPlayed: "55" },
    { number: 5, name: "William Winger", position: "M", gamesPlayed: "3" },
    { number: 6, name: "Fillipe Forward", position: "F", gamesPlayed: "95" }
  ],
  all: function() {
    return this.players;
  },
  get: function(id) {
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer);
  }
};

export default PlayerAPI;
