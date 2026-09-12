export default function History() {

    const history = JSON.parse(localStorage.getItem("clickFast.scores")) || [];

    let rows = "";

    history.forEach((game, index) => {

        rows += `
            <tr>
                <td>#${index + 1}</td>
                <td>${game.pseudo}</td>
                <td>${game.mode}</td>
                <td>${game.difficulty}</td>
                <td>${game.score}</td>
                <td>${game.date}</td>
            </tr>
        `;
    });

    if (history.length === 0) {

        rows = `
            <tr>
                <td colspan="7" class="text-center text-secondary py-4">
                    No games played yet.
                </td>
            </tr>
        `;
    }

    return `
        <div class="container py-5">

            <div class="text-center mb-5">
                <h1 class="display-5 fw-bold">
                    🏆 Game History
                </h1>

                <p class="text-secondary">
                    Check your previous FastClick results.
                </p>
            </div>

            <div class="card shadow-sm">

                <div class="card-body">

                    <div class="table-responsive">

                        <table class="table table-hover text-center align-middle">

                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Pseudo</th>
                                    <th>Mode</th>
                                    <th>Difficulty</th>
                                    <th>Score</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                ${rows}
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

            <div class="text-center mt-4">

                <a href="/" class="btn btn-primary">
                      back home
                </a>

            </div>

        </div>
    `;
}