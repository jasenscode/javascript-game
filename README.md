# JavaScript Game

This is a game titled "Bomb Jump!" made using vanilla JavaScript that I built in the fourth week of the _nology bootcamp.

[Check the live demo here!](https://jasenscode.github.io/javascript-game/)

![Game screenshot](https://github.com/jasenscode/javascript-game/blob/main/assets/images/screenshot.JPG?raw=true)


____________
### Technologies

- HTML5
- Sass
- JavaScript

_____
### About

The requirement of this project was to make a game of our choice using concepts in the above technologies learnt on the course so far.

My game started out with the idea that the user controls the character by way of a simple jump function, and must avoid colliding with the bomb that scrolls across the screen. 

I knew the hardest part of this would be to actually determine when the character and bomb had collided. As such, before I began any styling, I spent time researching ways to track the position of the two HTML elements on the screen so that I could then use this to create logic to determine what would happen when they were both in the same area of the screen at the same time.

For this, I used the HTMLElement.offsetTop and HTMLElement.offsetLeft.
