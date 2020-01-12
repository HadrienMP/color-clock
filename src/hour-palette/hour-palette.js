import {rgbToHex} from "../common/rgb.js";

const palette = [
    "#0040ff",
    "#0080ff",
    "#00ffff",
    "#00ff00",
    "#bfff00",
    "#ffff00",
    "#ff8000",
    "#ff0000",
    "#ff00bf",
    "#bf00ff",
    "#4000ff",
    "#0000ff"
];




const msInHour = 1000 * 60 * 60;

function toColor(time) {
    const colorCurrentHour = palette[(time.getHours() - 1) % 12];
    const colorNextHour = palette[time.getHours() % 12];
    let previousHour = new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours());
    let msSinceLastHour = time.getTime() - previousHour.getTime();
    return merge(colorCurrentHour, colorNextHour, msSinceLastHour / msInHour);
}

function merge(colorCurrentHour, colorNextHour, rate) {
    let toto = toNumericRGB(colorCurrentHour);
    let toto1 = toNumericRGB(colorNextHour);
    let numericRGB = {
        red: between(toto["red"], toto1["red"], rate),
        green: between(toto["green"], toto1["green"], rate),
        blue: between(toto["blue"], toto1["blue"], rate)
    };
    return rgbToHex(numericRGB);
}

function toNumericRGB(hexadecimal) {
    let redStr = hexadecimal.substr(1, 2);
    let greenStr = hexadecimal.substr(3, 2);
    let blueStr = hexadecimal.substr(5, 2);
    return {
        red: parseInt(redStr, 16),
        green: parseInt(greenStr, 16),
        blue: parseInt(blueStr, 16)
    };
}

function between(first, second, rate) {
    return Math.floor(first - ((first - second) * rate));
}

import {setup} from "../common/gui.js";

setup(toColor);