import React, { Component } from "react";

class Schedule extends Component {
  state = {
    schedules: [
      {
        date: "6/5",
        team: "Evergreen"
      },
      {
        date: "6/8",
        team: "Kickers"
      },
      {
        date: "6/14",
        team: "United"
      }
    ]
  };

  onAddSchedule = e => {
    e.preventDefault();
    this.setState({
      schedules: [
        ...this.state.schedules,
        {
          date: e.target.date.value,
          team: e.target.team.value
        }
      ]
    });
    this.clearInputFields(e.target);
  };

  clearInputFields(target) {
    target.date.value = "";
    target.team.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onAddSchedule}>
          <input name="date" type="text" placeholder="Date" />
          <input name="team" type="text" placeholder="Team" />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.schedules.map((s, index) => {
            return (
              <li key={index}>
                {s.date} @ {s.team}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Schedule;
