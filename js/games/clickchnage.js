import {
    addHit,
    addMiss
} from "./handscore.js";

let target = null;

export default function click() {

    const data = JSON.parse(
        localStorage.getItem("clickFast.settings")
    );

    let max;

    if (data.difficulty === "easy") {
        max = 32;
    } else if (data.difficulty === "medium") {
        max = 48;
    } else if (data.difficulty === "hard") {
        max = 64;
    }

    target = randomSquare(max);

    target.style.background = "black";

    const board = document.getElementById("game-board");

    board.addEventListener("click", handClick);
}


function handClick(event) {

    if (event.target !== target) {

        console.log("misses");

        addMiss();

        return;
    }

    target.style.background = "";

    addHit();

    const data = JSON.parse(
        localStorage.getItem("clickFast.settings")
    );

    let max;

    if (data.difficulty === "easy") {
        max = 32;
    } else if (data.difficulty === "medium") {
        max = 48;
    } else if (data.difficulty === "hard") {
        max = 64;
    }

    target = randomSquare(max);

    target.style.background = "black";
}


function randomSquare(max) {

    const randomNumber = Math.floor(
        Math.random() * max
    );

    return document.getElementById(`${randomNumber}`);
}