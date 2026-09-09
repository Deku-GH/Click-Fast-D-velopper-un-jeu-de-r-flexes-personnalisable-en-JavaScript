import url_route from "./route.js"
document.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.matches("div a")) {

        return
    }
    e.preventDefault();
console.log("here")
    url_route(e)

})