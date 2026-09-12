export default function Game() {

    const data = localStorage.getItem("clickFast.settings");
    const Data = JSON.parse(data);

    let numberOfSquares;

    if (Data.difficulty === "easy") {
        numberOfSquares = 32;
    } 
    else if (Data.difficulty === "medium") {
        numberOfSquares = 48;
    } 
    else if (Data.difficulty === "hard") {
        numberOfSquares = 64;
    }

    const { columns, rows } = getGrid(numberOfSquares);

    return `
        <div class="container py-4">

            <div class="text-center mb-4">

                <h1 class="fw-bold">⚡ FastClick</h1>

                <div class="d-flex justify-content-center gap-5">

                    <div>
                        <small class="text-secondary">SCORE</small>
                        <h3 id="score">0</h3>
                    </div>

                    <div>
                        <small class="text-secondary">TIME</small>
                        <h3 id="timer">${Data.duration}</h3>
                    </div>

                </div>
            </div>

            <div class="ratio ratio-1x1 w-50 mx-auto">

                <div class="border border-3">

                    <div
                        id="game-board"
                        class="d-grid h-100"
                        style="
                            grid-template-columns: repeat(${columns}, 1fr);
                            grid-template-rows: repeat(${rows}, 1fr);
                        "
                    >

                        ${createSquares(numberOfSquares)}

                    </div>

                </div>

            </div>

        </div>
    `;
}


    function createSquares(numberOfSquares) {

        let squares = "";

        for (let i = 0; i < numberOfSquares; i++) {

            squares += `
                <div
                    class="border"
                    id="${i}"
                ></div>
            `;
        }

        return squares;
    }


    function getGrid(number) {

        let columns = Math.floor(Math.sqrt(number));

        while (number % columns !== 0) {
            columns--;
        }

        const rows = number / columns;

        return {
            columns,
            rows
        };
    }