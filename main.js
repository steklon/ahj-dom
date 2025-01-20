/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/moving_an_element/Game.js

class Game {
  constructor() {
    this.conteiner = document.querySelector(".game-container");
    this.character = document.createElement("img");
    this.gridSize = 4;
    this.totalCells = this.gridSize * this.gridSize;
  }
  createGrid() {
    for (let i = 0; i < this.gridSize ** 2; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
      this.conteiner.appendChild(cell);
    }
  }
  characterInitialization() {
    this.character.id = "character";
    this.character.src = goblin_namespaceObject;
    this.conteiner.insertAdjacentElement("beforeend", this.character);
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
  const position = new Game();
  position.createGrid();
  position.characterInitialization();
  const currentPosition = position.getRandomPosition();
  position.setCharacterPosition(currentPosition.row, currentPosition.col);
  setInterval(() => moveCharacter(currentPosition, position), 1000);
}
;// CONCATENATED MODULE: ./src/js/app.js

start();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;