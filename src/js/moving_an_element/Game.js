import goblinImage from "../../img/goblin.png";

export default class Game {
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
    this.character.src = goblinImage;
    this.conteiner.insertAdjacentElement("beforeend", this.character);
  }

  getRandomPosition() {
    const randomIndex = Math.floor(Math.random() * this.totalCells);
    const row = Math.floor(randomIndex / this.gridSize);
    const col = randomIndex % this.gridSize;
    return { row, col };
  }

  setCharacterPosition(row, col) {
    this.character.style.top = `${row * 100}px`;
    this.character.style.left = `${col * 100}px`;
  }
}
