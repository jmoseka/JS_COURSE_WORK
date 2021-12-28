const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

scorers = {};
//1
/*goalScored = function () {
  let i = 0;
  for (const x of game.scored) {
    i++;
    console.log();
    scorers[x] = i;
  }
};
*/
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);
//2

let average = 0;
for (const i of Object.values(game.odds)) {
  average += i;
}
average = average / Object.values(game.odds).length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const printOdds = function () {
  const values = Object.values(game.odds);
  const names = [game.team1, "draw", game.team2];
  for (let i = 0; i < values.length; i++) {
    if (names[i] === "draw") {
      console.log(`Odd of ${names[i]}: ${values[i]}`);
    } else {
      console.log(`Odd of victory ${names[i]}: ${values[i]}`);
    }
  }
};
//printOdds();

//console.log(scorers);
