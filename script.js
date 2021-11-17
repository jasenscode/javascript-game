// "use strict";

// Selectors
const bomb = document.querySelector("#bomb");
const character = document.querySelector("#character");
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
  currentScore.innerHTML = 0;
};

startBtn.addEventListener("click", handleStart);

// function to make character jump
const handleJump = () => {
  if (!character.classList.contains("animate-character")) {
    character.classList.add("animate-character");
    setTimeout(() => {
      character.classList.remove("animate-character");
    }, 700);
  }
};

jumpBtn.addEventListener("click", handleJump);

// function to calculate position of bomb
const getPositions = setInterval(() => {
  if (character.offsetTop >= 112 && bomb.offsetLeft <= 50) {
    bomb.classList.remove("animate-bomb");
    if (currentScore.innerHTML > highScore.innerHTML) {
      highScore.innerHTML = currentScore.innerHTML;
    }
  }
}, 10);

// function to check if bomb has reached end of animation without hitting character

const setCurrentScore = () => {
  currentScore.innerHTML++;
};

bomb.addEventListener("animationiteration", setCurrentScore);

// function to reset the game - HANDLE RESET
const handleReset = () => {
  bomb.classList.remove("animate-bomb");
  currentScore.innerHTML = 0;
  highScore.innerHTML = 0;
};

resetBtn.addEventListener("click", handleReset);

// // if (bombPosition.right >= 22) {
// //   alert("it has a frog!");
// // }

// Add year for footer
const getYear = new Date();
document.querySelector("#current-year").innerHTML = getYear.getFullYear();
