const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const setEvent = new Set([...gameEvents.values()]);
//1 - create an array of events
//const events = [...new Set(gameEvents.values())]
const events = [...setEvent];
//console.log(events);

//2 Remove yello card 64 min
gameEvents.delete(64);
//console.log(gameEvents);

//3.
const size = 90 / gameEvents.size;
console.log(`"An event happened, on average, every ${size} minutes"`);
/* 4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL
 */

for (const [i, event] of gameEvents.entries()) {
  i < 45
    ? console.log(`[FIRST HALF] ${i}: ${event}`)
    : console.log(`[SECOND HALF] ${i}: ${event}`);
}
