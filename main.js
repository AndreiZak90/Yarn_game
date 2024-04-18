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
;// CONCATENATED MODULE: ./src/js/app.js

class Game {
  constructor() {
    this.field = document.querySelectorAll(".item_box");
    this.box = document.querySelector(".box");
    this.miss = document.querySelector(".false_current");
    this.click = document.querySelector(".win_current");
    this.goblinPNG = goblin_namespaceObject;
    this.onPage = -1;
    this.onClick = 0;
  }
  playGame() {
    this.intervalFunc();
    this.gameClick();
  }
  intervalFunc() {
    let currNumb = 0;
    const goblin = `<img src='${goblin_namespaceObject}' class="goblin" alt="goblin"></img>`;
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
      this.onPage++;
      this.miss.textContent = this.onPage - this.click.textContent;
      if (this.miss.textContent >= "5") {
        this.miss.innerHTML = "Game OWER!!!";
        this.clear();
      }
    }, 1000);
  }
  gameClick() {
    this.box.addEventListener("click", e => {
      const goblinFinder = this.box.querySelector(".goblin");
      if (e.target === goblinFinder) {
        this.onClick++;
        this.click.textContent = this.onClick;
      } else {
        this.miss.textContent++;
      }
      if (this.click.textContent >= "5") {
        this.click.innerHTML = "Your WIN!!!";
        this.clear();
      }
    });
  }
  clear() {
    clearInterval(this.intervalId);
  }
}
;// CONCATENATED MODULE: ./src/index.js


const games = new Game();
games.playGame();
/******/ })()
;