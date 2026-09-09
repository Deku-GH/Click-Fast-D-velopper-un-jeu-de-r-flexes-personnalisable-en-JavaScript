
export default function About() {
    return `
        <div class="container py-5">

            <!-- Title -->
            <div class="text-center mb-5">
                <h1 class="display-4 fw-bold">⚡ About FastClick</h1>

                <p class="lead text-secondary">
                    Test your reaction speed and see how fast you can click!
                </p>
            </div>


            <!-- What is FastClick? -->
            <div class="row justify-content-center">
                <div class="col-lg-8">

                    <div class="card shadow-sm mb-4">
                        <div class="card-body p-4">

                            <h2 class="h4 mb-3">
                                🎯 What is FastClick?
                            </h2>

                            <p class="text-secondary">
                                FastClick is a simple reaction and speed game.
                                Your goal is to click as many times as possible
                                within the given time.
                            </p>

                        </div>
                    </div>


                    <!-- How to play -->
                    <div class="card shadow-sm mb-4">
                        <div class="card-body p-4">

                            <h2 class="h4 mb-3">
                                🎮 How to Play
                            </h2>

                            <ol class="text-secondary">
                                <li class="mb-2">
                                    Choose your game parameters.
                                </li>

                                <li class="mb-2">
                                    Click <strong>Start Game</strong>.
                                </li>

                                <li class="mb-2">
                                    Click as fast as you can before the
                                    timer reaches zero.
                                </li>

                                <li>
                                    Check your score and ranking at the end.
                                </li>
                            </ol>

                        </div>
                    </div>


                    <!-- Objective -->
                    <div class="card shadow-sm mb-4">
                        <div class="card-body p-4">

                            <h2 class="h4 mb-3">
                                🏆 Objective
                            </h2>

                            <p class="text-secondary mb-0">
                                Get the highest score possible and try to
                                beat your previous ranking!
                            </p>

                        </div>
                    </div>


                    <!-- Back button -->
                    <div class="text-center mt-4">

                        <a href="/" class="btn btn-primary px-4">
                            ⚡ Start Playing
                        </a>

                    </div>

                </div>
            </div>

        </div>
    `;
}

