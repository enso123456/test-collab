import React from "react";
import { Link } from "react-router-dom";
import PlayerAPI from "../api";
import PlayerPropsAPI from "../player-props";

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
  const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }

  const getPlayerProp = PlayerPropsAPI.get(
    parseInt(props.match.params.number, 10)
  );

  return (
    <div>
      <h1>
        {player.name} (#{player.number})
      </h1>
      <h2>Position: {fullNamePosition(player.position)}</h2>

      <p>{getPlayerProp.props.new}</p>
      <table>
        <tr>
          {getPlayerProp.props.new && <th>New</th>}
          {getPlayerProp.props.saves && <th>Saves</th>}
          {getPlayerProp.props.trending && <th>Trending</th>}
          {getPlayerProp.props.injuredTimes && <th>Injury</th>}
          {getPlayerProp.props.age && <th>Age</th>}
          {getPlayerProp.props.cards && <th>Cards</th>}
          {getPlayerProp.props.club && <th>Clubs</th>}
        </tr>
        <tbody>
          <td>
            {getPlayerProp.props.new && (
              <tr>{getPlayerProp.props.new ? "True" : "False"}</tr>
            )}
          </td>
          <td>
            {getPlayerProp.props.saves && <tr>{getPlayerProp.props.saves}</tr>}
          </td>
          <td>
            {getPlayerProp.props.trending && (
              <tr>{getPlayerProp.props.trending ? "True" : "False"}</tr>
            )}
          </td>
          <td>
            {getPlayerProp.props.injuredTimes && (
              <tr>{getPlayerProp.props.injuredTimes}</tr>
            )}
          </td>
          <td>
            {getPlayerProp.props.age && <tr>{getPlayerProp.props.age}</tr>}
          </td>
          <td>
            {getPlayerProp.props.cards && <tr>{getPlayerProp.props.cards}</tr>}
          </td>
          <td>
            {getPlayerProp.props.club && <tr>{getPlayerProp.props.club}</tr>}
          </td>
        </tbody>
      </table>

      {player.gamesPlayed + 10 >= CENTURY ? (
        <b>This player is close to his 100th game!!</b>
      ) : null}
      <br />
      <Link to="/roster">Back</Link>
    </div>
  );
};

export default Player;
