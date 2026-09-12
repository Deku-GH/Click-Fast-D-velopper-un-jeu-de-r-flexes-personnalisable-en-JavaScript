import error from "../component/404.js";
import home from "../component/home.js"
import About from "../component/about.js";
import History from "../component/history.js";
import Game from "../component/game.js";
import startTimer from "./games/time.js";
import GameConfig from "../component/GameConfig.js"
import config from "./config.js";
import click from "./games/clickchnage.js";
import { resetScore } from "./games/handscore.js";


document.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.matches("a")) {

        return
    }
    e.preventDefault();
    url_route(e);

})
const component = {
    404: {
        component: error,
        titre: "",
        desciption: ""
    },
    "/": {
        component: home,
        titre: "home page",
        desciption: ""

    },
    "/about": {
        component: About,
        titre: "about game",
        desciption: ""
    },
    "/history": {
        component: History
    },
    "/game": {
        component: Game
    },
    "/gameconfig": {
        component: GameConfig
    }

}

const url_route = (event) => {
    // event = event || window.event;
    // console.log(event);
    event.preventDefault();
    window.history.pushState({}, '', event.target.href)

    handleLocation();

}

export default function handleLocation() {
    const location = window.location.pathname;
    const app = document.getElementById("app");
   
    console.log("game")
    const route = component[location] || component["404"];

    app.innerHTML = ""
    app.innerHTML = route.component();
    if (location == "/gameconfig") {
        config();
    }
    if (location == "/game") {
         resetScore();
        startTimer();
        click();
    }

};
window.addEventListener("routechange", handleLocation);
handleLocation();

