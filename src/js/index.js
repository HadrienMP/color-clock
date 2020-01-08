import {toColor} from './color-clock.js';

let body = document.getElementsByTagName("body")[0];
let colorEl = document.getElementById("color");
let timeEl = document.getElementById("time");

update();
setInterval(update, 500);

function update() {
    const time = new Date();
    let color = toColor(time);

    colorEl.innerText = color;
    timeEl.innerText = time.toLocaleTimeString('en-US',
        {
            hour12: false,
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
    body.style = 'background-color: ' + color;
}