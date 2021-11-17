// "use strict";

// Selectors
const bomb = document.querySelector("#bomb");
const character = document.querySelector("#character");
const star = document.querySelector("#star");
const jumpBtn = document.querySelector("#jump-btn");
const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");
const currentScore = document.querySelector("#current-score");
const highScore = document.querySelector("#high-score");

// function to start game
const handleStart = () => {
  bomb.classList.add("animate-bomb");
  star.classList.add("animate-star");
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
  } else if (character.classList.contains("animate-character")) {
    character.classList.add("double-jump");
    setTimeout(() => {
      character.classList.remove("double-jump");
    }, 500);
  }
  if (!star.classList.contains("animate-star")) {
    star.classList.add("animate-star");
  }
};

jumpBtn.addEventListener("click", handleJump);

// function to check collision of character and bomb
const getBombCollision = setInterval(() => {
  if (character.offsetTop >= 112 && bomb.offsetLeft < 50 && bomb.offsetLeft > 8) {
    bomb.classList.remove("animate-bomb");
    star.classList.remove("animate-star");
    if (parseInt(currentScore.innerHTML) > parseInt(highScore.innerHTML)) {
      highScore.innerHTML = currentScore.innerHTML;
    }
  }
}, 10);

// function to check collision of character and star
const getStarCollision = setInterval(() => {
  let newScore;
  if (character.offsetTop >= 50 && character.offsetTop <= 70 && star.offsetLeft < 50 && star.offsetLeft > 8) {
    newScore = parseInt(currentScore.innerHTML) + 2;
    currentScore.innerHTML = newScore;
    star.classList.remove("animate-star");
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

// Add year for footer
const getYear = new Date();
document.querySelector("#current-year").innerHTML = getYear.getFullYear();
