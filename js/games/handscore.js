let score = 0;
let hits = 0;
let misses = 0;


export function resetScore() {
    score = 0;
    hits = 0;
    misses = 0;

    const scoreElement = document.getElementById("score");

    if (scoreElement) {
        scoreElement.textContent = "0";
    }
}


export function addHit() {

    hits++;
    score++;

    const scoreElement = document.getElementById("score");

    if (scoreElement) {
        scoreElement.textContent = score;
    }
}


export function addMiss() {
    misses++;
}


export function getScore() {
    return score;
}


export function saveScore() {

    const settings = JSON.parse(localStorage.getItem("clickFast.settings"));

    const result = {
        pseudo: settings.pseudo,
        mode: settings.mode,
        difficulty: settings.difficulty,
        score: score,
        date: new Date().toLocaleString()
    };

    const oldScores = JSON.parse(localStorage.getItem("clickFast.scores")) || [];

    oldScores.push(result);

    localStorage.setItem(
        "clickFast.scores",
        JSON.stringify(oldScores)
    );

    console.log("Score saved:", result);
}
function calculatePrecision(hits, misses) {

    return Math.round(
        (hits / (hits + misses)) * 100
    );
}