export default function data() {

    const saved = localStorage.getItem("clickFast.settings");

    return JSON.parse(saved);
}