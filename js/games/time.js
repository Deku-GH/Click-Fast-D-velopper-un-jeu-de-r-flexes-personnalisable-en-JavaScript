
import data from "./data.js";
import { saveScore } from "./handscore.js";


export default function startTimer() {
    let datatime = data()

    let time = datatime.duration;
    const timer = document.getElementById('timer');


    const interval = setInterval(() => {
        timer.textContent = time;
        time--;
        if (time <= 0) {
            clearInterval(interval);
            console.log(time)

            saveScore();
            window.history.pushState({}, '', "/")
            window.dispatchEvent(new Event("routechange"));


        }
    }, 1000);

}




