
import handleLocation from "../route.js";
import data from "./data.js";


export default function startTimer() {
   let datatime = data()
  
    let time =datatime.duration;
    const timer = document.getElementById('timer');

   
    const interval = setInterval(() => {
        timer.textContent = time;
        time--;
        if (time == 0) {
            clearInterval(interval);
            window.history.pushState({}, '', "/")

            handleLocation();

        }
    }, 1000);

}




