export default function GameConfig() {
    return `
        <div class="container py-5">

            <div class="card shadow-sm mx-auto" style="max-width: 500px;">
                <div class="card-body p-4">

                    <h2 class="text-center mb-4">
                        ⚡ FastClick
                    </h2>

                    <form id="game-config-form">

                        <!-- Pseudo -->
                        <div class="mb-4">
                            <label for="pseudo" class="form-label fw-bold">
                                Pseudo
                            </label>

                            <input
                                type="text"
                                id="pseudo"
                                name="pseudo"
                                class="form-control"
                                minlength="2"
                                maxlength="20"
                                required
                                placeholder="Enter your pseudo"
                            >
                        </div>


                        <!-- Mode -->
                        <div class="mb-4">

                            <label class="form-label fw-bold">
                                Mode de jeu
                            </label>

                            <div class="d-flex gap-2">

                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="mode"
                                    id="classic"
                                    value="classique"
                                    checked
                                >

                                <label
                                    class="btn btn-outline-primary flex-fill"
                                    for="classic"
                                >
                                    🎯 Classique
                                </label>


                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="mode"
                                    id="precision"
                                    value="precision"
                                >

                                <label
                                    class="btn btn-outline-primary flex-fill"
                                    for="precision"
                                >
                                    🎯 Précision
                                </label>


                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="mode"
                                    id="challenge"
                                    value="defi"
                                >

                                <label
                                    class="btn btn-outline-primary flex-fill"
                                    for="challenge"
                                >
                                    ⚡ Défi
                                </label>

                            </div>
                        </div>


                        <!-- Duration -->
                        <div class="mb-4">

                            <label
                                for="time"
                                class="form-label fw-bold"
                            >
                                Durée
                            </label>

                            <select
                                id="time"
                                name="duration"
                                class="form-select"
                            >
                                <option value="10" selected>
                                    10 secondes
                                </option>

                                <option value="20">
                                    20 secondes
                                </option>

                                <option value="30">
                                    30 secondes
                                </option>
                            </select>

                        </div>


                        <!-- Difficulty -->
                        <div class="mb-4">

                            <label class="form-label fw-bold">
                                Difficulté
                            </label>

                            <div class="d-flex gap-2">

                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="difficulty"
                                    id="easy"
                                    value="easy"
                                >

                                <label
                                    class="btn btn-outline-success flex-fill"
                                    for="easy"
                                >
                                    🟢 Facile
                                </label>


                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="difficulty"
                                    id="medium"
                                    value="medium"
                                    checked
                                >

                                <label
                                    class="btn btn-outline-warning flex-fill"
                                    for="medium"
                                >
                                    🟡 Moyenne
                                </label>


                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="difficulty"
                                    id="hard"
                                    value="hard"
                                >

                                <label
                                    class="btn btn-outline-danger flex-fill"
                                    for="hard"
                                >
                                    🔴 Difficile
                                </label>

                            </div>

                        </div>


                        <!-- Start -->
                        <a
                            href="/game"
                            id="start-game"
                            class="btn btn-primary w-100"
                        >
                            Start Game 🚀
                        </a>

                    </form>

                </div>
            </div>

        </div>
    `;
}