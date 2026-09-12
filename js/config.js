export default function config() {

    const startGame = document.getElementById("start-game");

    startGame.addEventListener("click", () => {

        const form = document.getElementById("game-config-form");

        const formData = new FormData(form);

        const gameConfig = {
            pseudo: formData.get("pseudo").trim(),
            mode: formData.get("mode"),
            duration: Number(formData.get("duration")),
            difficulty: formData.get("difficulty")
        };

        localStorage.setItem(
            "clickFast.settings",
            JSON.stringify(gameConfig)
        );

        console.log(gameConfig);
    });
}