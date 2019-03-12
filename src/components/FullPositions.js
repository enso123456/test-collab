import React from "react";
import { Link } from "react-router-dom";
import Chart from "react-google-charts";
import _ from "lodash";

import PlayerAPI from "../api";

const allPositions = [
  {
    label: "Goalkeeper",
    value: "G"
  },
  {
    label: "Defender",
    value: "D"
  },
  {
    label: "Midfielder",
    value: "M"
  },
  {
    label: "Forward",
    value: "F"
  }
];

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

const aggregatePositions = () => {
  const results = _.groupBy(PlayerAPI.all(), function(player) {
    return player.position;
  });
  const roles = [["Task", "Hours per Day"]];
  for (var key in results) {
    roles.push([fullNamePosition(key), results[key].length]);
  }

  return roles;
};

const FullPositions = () => (
  <div>
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={aggregatePositions()}
      options={{
        title: "Full Positions"
      }}
      rootProps={{ "data-testid": "1" }}
    />
    <ul>
      {allPositions.map(p => (
        <li key={p.value}>
          <Link to={`/positions/${p.value}`}>{p.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FullPositions;
