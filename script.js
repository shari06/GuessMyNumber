"use strict";
// console.log(document.querySelector(".message").textContent);

let secretNumber = Math.trunc(Math.random() * 20 + 1);

const chkfunction = function () {
  let count = Number(document.querySelector(".score").textContent);
  if (count >= 1) {
    const guessnumber = Number(document.querySelector(".guess").value);
    if (!guessnumber) {
      document.querySelector(".message").textContent = "⛔️ No number!";
    } else if (guessnumber === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".highscore").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    } else {
      guessnumber > secretNumber
        ? (document.querySelector(".message").textContent = "📈 Too high!")
        : (document.querySelector(".message").textContent = "📉 Too low!");
      count -= 1;
      if (count < 1) {
        document.querySelector(".message").textContent = "Lost your game!";
        count = 0;
      }
      document.querySelector(".score").textContent = count;
    }
  }
};

const funAgain = function () {
  document.querySelector(".message").textContent = "Start Guessing!";
  document.querySelector(".score").textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#DCDF1A";
  document.querySelector(".number").style.width = "15rem";
};

document.querySelector(".check").addEventListener("click", chkfunction);

document.querySelector(".again").addEventListener("click", funAgain);
