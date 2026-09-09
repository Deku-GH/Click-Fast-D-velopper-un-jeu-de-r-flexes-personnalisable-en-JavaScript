import error from "../component/404.js";
import home from "../component/home.js"
import About from "../component/about.js";
import History from "../component/history.js";
import Game from "../component/game.js";

document.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {

        return
    }
    e.preventDefault();
    url_route(e);

})
const urlRoutes = {
    "404": {
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
    }

}

 export default function url_route (event){
    // event = event || window.event;
    // console.log(event);
    event.preventDefault();
    window.history.pushState({}, '', event.target.href)

    handleLocation();
    
}

 const handleLocation = () => {
    const location = window.location.pathname;
    const app = document.getElementById("app");
      if(location.length==0){
        location="/"
      }
    const route = urlRoutes[location] || urlRoutes["404"];
   
    app.innerHTML = ""
    app.innerHTML = route.component();
};
handleLocation();