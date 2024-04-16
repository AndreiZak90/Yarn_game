import goblinPNG from "../img/goblin.png";

export default class Game {
  constructor() {
    this.field = document.querySelectorAll(".item_box");
    this.box = document.querySelector(".box");
    this.miss = document.querySelector(".false_current");
    this.click = document.querySelector(".win_current");

    this.goblinPNG = goblinPNG;
  }

  playGame() {
    this.intervalFunc();
    this.gameClick();
  }

  intervalFunc() {
    let currNumb = 0;
    const goblin = `<img src='${goblinPNG}' class="goblin" alt="goblin"></img>`;
    this.intervalId = setInterval(() => {
      let randNumb = Math.floor(Math.random() * this.field.length);
      this.field[currNumb].innerHTML = "";

      if (currNumb !== randNumb) {
        currNumb = randNumb;
        this.field[currNumb].insertAdjacentHTML("beforeend", goblin);
      } else {
        while (currNumb === randNumb) {
          randNumb = Math.floor(Math.random() * this.field.length);
        }
        currNumb = randNumb;
        this.field[currNumb].insertAdjacentHTML("beforeend", goblin);
      }
      this.miss.textContent++;
      if (this.miss.textContent >= "5") {
        this.miss.innerHTML = "Game Ower!!!";
        this.clear();
      }
    }, 1000);
  }

  gameClick() {
    this.box.addEventListener("click", (e) => {
      const goblinFinder = this.box.querySelector(".goblin");
      if (e.target === goblinFinder) {
        this.miss.textContent--;
        this.click.textContent++;
        if (this.click.textContent >= "5") {
          this.click.innerHTML = "Your WIN!!!";
          this.clear();
        }
      }
    });
  }

  clear() {
    clearInterval(this.intervalId);
  }
}
