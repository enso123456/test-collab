// THIS FILE SHOULD NOT BE MODIFIED!!!
const PlayerPropsAPI = {
  props: [
    { number: 1, props: { new: true, saves: 87, trending: true } },
    { number: 2, props: { injuredTimes: 9, club: "nz" } },
    { number: 3, props: { saves: 3, cards: 1 } },
    { number: 4, props: { new: true, age: 28 } },
    { number: 5, props: { injuredTimes: 7, age: 33 } },
    { number: 6, props: {} }
  ],

  get: function(id) {
    const isPlayer = p => p.number === id;
    return this.props.find(isPlayer);
  }
};

export default PlayerPropsAPI;
