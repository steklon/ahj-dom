/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/moving_an_element/Game.js
class Game {
  constructor() {
    this.character = document.getElementById("character");
    this.gridSize = 4;
    this.totalCells = this.gridSize * this.gridSize;
  }
  getRandomPosition() {
    const randomIndex = Math.floor(Math.random() * this.totalCells);
    const row = Math.floor(randomIndex / this.gridSize);
    const col = randomIndex % this.gridSize;
    return {
      row,
      col
    };
  }
  setCharacterPosition(row, col) {
    this.character.style.top = `${row * 100}px`;
    this.character.style.left = `${col * 100}px`;
  }
}
;// CONCATENATED MODULE: ./src/js/moving_an_element/moveCharacter.js

function moveCharacter(currentPosition, position) {
  let newPosition;
  do {
    newPosition = position.getRandomPosition();
  } while (newPosition.row === currentPosition.row && newPosition.col === currentPosition.col);
  currentPosition.row = newPosition.row;
  currentPosition.col = newPosition.col;

  // console.log(`Current Position: ${currentPosition.row}, ${currentPosition.col}`);
  // console.log(`New Position: ${newPosition.row}, ${newPosition.col}`);

  position.setCharacterPosition(currentPosition.row, currentPosition.col);
}
function start() {
  let position = new Game();
  let currentPosition = position.getRandomPosition();
  position.setCharacterPosition(currentPosition.row, currentPosition.col);
  setInterval(() => moveCharacter(currentPosition, position), 1000);
}
;// CONCATENATED MODULE: ./src/js/app.js

start();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;