import Game from "../moving_an_element/Game";
import { moveCharacter } from "../moving_an_element/moveCharacter";
import start from "../moving_an_element/moveCharacter";

test("проверка использования jsdom", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

describe("Game class", () => {
  let game;

  beforeEach(() => {
    document.body.innerHTML =
      '<div id="character" style="position: absolute;"></div>';
    game = new Game();
  });

  test("проверка генерирования случайной позиции в пределах сетки", () => {
    const position = game.getRandomPosition();
    expect(position).toHaveProperty("row");
    expect(position).toHaveProperty("col");
    expect(position.row).toBeGreaterThanOrEqual(0);
    expect(position.row).toBeLessThan(4);
    expect(position.col).toBeGreaterThanOrEqual(0);
    expect(position.col).toBeLessThan(4);
  });

  test("правильно установить позицию", () => {
    game.setCharacterPosition(1, 2);
    const character = document.getElementById("character");
    expect(character.style.top).toBe("100px");
    expect(character.style.left).toBe("200px");
  });

  test("перемещение персонажа на новую позицию", () => {
    const initialPosition = game.getRandomPosition();
    game.setCharacterPosition(initialPosition.row, initialPosition.col);

    const currentPosition = { ...initialPosition };
    moveCharacter(currentPosition, game);

    // Проверяем, что позиция действительно изменилась
    expect(currentPosition.row + currentPosition.col).not.toEqual(
      initialPosition.row + initialPosition.col,
    );
    expect(currentPosition.col).not.toEqual(initialPosition.col);

    const character = document.getElementById("character");
    expect(parseInt(character.style.top, 10)).toBe(currentPosition.row * 100);
    expect(parseInt(character.style.left, 10)).toBe(currentPosition.col * 100);
  });
});

describe("start function", () => {
  test("инициализация положения персонажа и начало движения", () => {
    jest.useFakeTimers();

    start(); // Теперь вызываем функцию сразу

    const character = document.getElementById("character");
    expect(character.style.top).toBeDefined();
    expect(character.style.left).toBeDefined();

    jest.advanceTimersByTime(1000);

    const newTop = character.style.top;
    const newLeft = character.style.left;

    // Проверяем, что позиция изменилась
    expect(newTop).not.toEqual("0px"); // Исходное положение
    expect(newLeft).not.toEqual("0px"); // Исходное положение

    jest.useRealTimers();
  });
});
