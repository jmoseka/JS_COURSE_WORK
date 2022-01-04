"use strict";
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  displayResult: function (type) {
    if (type === "string") {
      console.log(`Poll results are ${this.answers}`);
    }
    if (type === "array") {
      console.log(this.answer);
    }
  },

  registerNewAnswer: function () {
    const answer = Number(
      prompt(`${poll.question}\n ${this.options.join("\n")}`)
    );

    if (typeof answer === "number" && answer >= 0 && answer < 4) {
      this.answers[answer] += 1;
      this.displayResult("string");
    } else {
      console.log("Invalid input");
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 1] });
