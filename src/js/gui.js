let body = document.getElementsByTagName("body")[0];
let colorEl = document.getElementById("color");
let timeEl = document.getElementById("time");

export function setup(color_converter) {
    update(color_converter);
    setInterval(() => update(color_converter), 500);
}

function update(color_converter) {
    const time = new Date();
    let color = color_converter(time);

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