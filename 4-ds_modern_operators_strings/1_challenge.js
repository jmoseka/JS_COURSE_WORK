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

//1
const [player1, player2] = game.players;
//2
//all players
const allPlayers = [...player1, ...player2];

//3
//for team 1
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const team1 = [gk, fieldPlayers];
//console.log(team1);

//4
//final players for team 1
const players1Final = ["Thiago", "Coutinho", "Perisic", ...fieldPlayers];
console.log(players1Final);

//5
const {
  odds: { team1: t1, x: draw, team2: t2 },
} = game;
console.log(t1, draw, t2);

//6
printGoals = function (...players) {
  console.log(`${players.length} were scored`);
};
printGoals(...game.scored);

//team more likely to win
team1 < team2;
console.log("Team 1 is more likely to win ");
