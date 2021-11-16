// "use strict";

// Selectors
const bomb = document.querySelector("#bomb");
const character = document.querySelector(".character");
const jumpBtn = document.querySelector("#jump-btn");
const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");
const currentScore = document.querySelector("#current-score");
const highScore = document.querySelector("#high-score");
// const bombPosition = bomb.getBoundingClientRect();
// const characterPosition = character.getBoundingClientRect();

// function to start game
const handleStart = () => {
  bomb.classList.add("animate-bomb");
  currentScore.innerHTML = "0";
};

startBtn.addEventListener("click", handleStart);

// function to make character jump
const handleJump = () => {
  character.classList.add("animate-character");
  setTimeout(() => {
    character.classList.remove("animate-character");
  }, 700);
};

jumpBtn.addEventListener("click", handleJump);

// function to calculate position of bomb

// function to check if bomb has reached end of animation without hitting character
//// adds one to score
//// if it does collide then score is added to high score if it is higher

// function to reset the game - HANDLE RESET
const handleReset = () => {
  bomb.classList.remove("animate-bomb");
  currentScore.innerHTML = "0";
  highScore.innerHTML = "0";
};

resetBtn.addEventListener("click", handleReset);
//// removes animation class from bomb
//// reset score to zero
//// reset high score to zero

// // if (bombPosition.right >= 22) {
// //   alert("it has a frog!");
// // }

// const checkBombPosition = setInterval(() => {
//   console.log(bombPosition.right);
//   console.log(bombPosition.left);
// }, 500);

// // bottomLane.contains(frog) &&

// // bomb.addEventListener("animationend", () => {
// //   console.log(bombPosition.left);
// // });

// const bombPos = document.querySelector("#bomb");
// // // console.log(bombPos.offsetLeft, bombPos.offsetTop);

// USE THIS TO CHECK POSITION OF BOMB
// const checkBombPosition = setInterval(() => {
//   console.log(bombPos.offsetLeft);
// }, 50);

// console.log(typeof bombPos.offsetLeft);
// console.log(jumpBtn);
// console.log(character);

// Add year for footer
const getYear = new Date();
document.querySelector("#current-year").innerHTML = getYear.getFullYear();
