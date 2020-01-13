import {palette} from "./palette.js";
import {rgbToHex} from "../common/rgb.js";
import {setup} from "../common/gui.js";

const msInHour = 1000 * 60 * 60;

function toColor(time) {
    return merge(
        palette[(time.getHours() - 1) % 12],
        palette[time.getHours() % 12],
        percentOfHourPassed(time));
}

function percentOfHourPassed(time) {
    let previousHour = new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours());
    let msSinceLastHour = time.getTime() - previousHour.getTime();
    return msSinceLastHour / msInHour;
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

setup(toColor);