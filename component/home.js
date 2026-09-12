export default function Home() {
    return `
        <div class="container py-5">

            <!-- Game title -->
            <div class="text-center mb-5">
                <h1 class="display-3 fw-bold">⚡ FastClick</h1>
                <p class="lead text-secondary">
                    Test your speed. Click as fast as you can!
                </p>
            </div>

            <!-- Player statistics -->
            <div class="row g-4 justify-content-center mb-5">

                <!-- Status -->
                <div class="col-md-4">
                    <div class="card shadow-sm text-center h-100">
                        <div class="card-body">
                            <h6 class="text-secondary">STATUS</h6>
                            <h2 class="fw-bold text-success">Ready</h2>
                        </div>
                    </div>
                </div>

                <!-- Last Rank -->
                <div class="col-md-4">
                    <div class="card shadow-sm text-center h-100">
                        <div class="card-body">
                            <h6 class="text-secondary">LAST RANK</h6>
                            <h2 class="fw-bold">#12</h2>
                        </div>
                    </div>
                </div>

                <!-- Points -->
                <div class="col-md-4">
                    <div class="card shadow-sm text-center h-100">
                        <div class="card-body">
                            <h6 class="text-secondary">POINTS</h6>
                            <h2 class="fw-bold text-primary">1250</h2>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Start Game -->
            <div class="text-center mb-4">
                <a href ="/gameconfig"
                    id="start-game"
                    class="btn btn-primary btn-lg px-5 py-3"
                >
                    ⚡ Start Game
                </a>
            </div>

           
            </div>

        </div>
    `;
}

