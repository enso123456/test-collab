# Question 1

On your right preview panel click on Roster, you'll see the name of all players
Click the name of any player and you'll see the position they play in. For example:

Dave Defender (#2)
Position: D

Your task is to take all the possible positions
G => Goalkeeper
D => Defender
M => Midfielder
F => Forward

and instead of the position letter, display full position name.

Player Data comes from api.js - you should not modify this file.

# Question 2

Make a new page called Positions (add a link in header), and on that page show list of all positions.
Clicking each position will show list of players that play in that selected position.

So you'll end up with 2 new pages:
/positions
/position/[[name]]

# Question 3

Each player carries some props which are not displayed on player pages yet.
Show them in a table by calling PlayerPropsAPI (player-props.js)
If there are no props, do not show the table.

# Question 4

Create a simple form on schedules page to add a new schedule. This will be 2 simple text fields:

1. Date (you can use simple text field)
2. Team

When form is submitted, simply output both of these values to console
Field validation will be good to have, but not required for this task.

# Question 5

On the page you created called "Positions" in one of the previous questions,
show a simple pie chart of all positions as categories and no. of players
in them as metrics.

You can use any external library or Google Charts API for this.

# Question 6

The players who are close to their 100 game plays show up this message on their player page:
"This player is close to his 100th game!!"
But right now, this message shows up for all players. Although it should only show up for
handful of players. Why?
