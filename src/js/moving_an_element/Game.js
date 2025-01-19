export default class Game {
  constructor() {
    this.character = document.getElementById("character");
    this.gridSize = 4;
    this.totalCells = this.gridSize * this.gridSize;
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
