"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

let displayMessage = function (message) {
  return (document.querySelector(".message").textContent = message);
};

document.querySelector(".reset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = secretNumber;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent =
    displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //if input is empty
  if (!guess) {
    document.querySelector(".message").textContent =
      displayMessage("🚫 No number!");
  }
  //win
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      displayMessage("🎉 Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        displayMessage("🔥 You lost!");
      document.querySelector(".score").textContent = "0";
    }
  }
});
