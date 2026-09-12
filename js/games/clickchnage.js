let count = 0;
let target = null;

export default function click() {

    const dataFromLocalstorage =
        localStorage.getItem("clickFast.settings");

    const data = JSON.parse(dataFromLocalstorage);

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

    // Player clicked the wrong square
    if (event.target !== target) {

        console.log("misses");

        return;
    }

    // Correct target
    target.style.background = "";

    count++;

    console.log("score:", count);

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

    const randomNumber =
        Math.floor(Math.random() * max);

    console.log(randomNumber);

    return document.getElementById(`${randomNumber}`);
}