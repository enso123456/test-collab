import React from "react";
import PlayerAPI from "../api";
import { Link } from "react-router-dom";

// century definition - do not mofidy
const CENTURY = 100;

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.

const fullNamePosition = position => {
  switch (position) {
    case "G": {
      return "Goalkeeper";
    }
    case "D": {
      return "Defender";
    }
    case "M": {
      return "Midfielder";
    }
    default:
      return "Forward";
  }
};

const Player = props => {
  const positionName = props.match.params.name;

  const players = PlayerAPI.all().filter(p => p.position == positionName);

  if (players.length === 0) {
    return <div>Sorry, but the player was not found</div>;
  }
  return (
    <div>
      <h2>Position: {fullNamePosition(positionName)}</h2>

      <ul>
        {players.map(p => (
          <li key={p.number}>{p.name}</li>
        ))}
      </ul>
      <Link to="/positions">Back</Link>
    </div>
  );
};

export default Player;
