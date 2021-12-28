//populating maps without using set method
"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const question = new Map([
  ["Question", "Whats the best programming language?"],
  [1, "C"],
  [2, "Python"],
  [3, "JS"],
  ["correct", 3],
  [true, "correct 🎉"],
  [false, "Try again"],
]);
//console.log(question);
//when adding a new entry, set method is the way to go

//COVERT OBJECT TO MAPS

const hoursMap = new Map(Object.entries(openingHours));
//console.log(hoursMap);

//iteration Quizes only
console.log(question.get("Question"));
for (const [key, values] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: value ${values}`);
  }
}

const answer = Number("3");

answer === question.get("correct")
  ? console.log(question.get(true))
  : console.log(question.get(false));

// or (the power of booleans as key)
//console.log(question.get(question.get("correct") === answer));

//convert map to array
//console.log(...question);

//there are also
//keys
//values
//entries
console.log(question.keys());
console.log(question.values());
console.log(question.entries());
