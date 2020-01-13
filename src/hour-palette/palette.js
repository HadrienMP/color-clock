import {rgbToHex} from "../common/rgb.js";

export const palette = detect();

function detect() {
    return Array.from(document.getElementsByClassName("color"))
        .sort(compare)
        .map(it => it)
        .map(el => window.getComputedStyle(el, null).getPropertyValue('background-color'))
        .map(it => it.replace("rgb(", ""))
        .map(it => it.replace(")", ""))
        .map(it => (it + "").split(","))
        .map(it => ({
            red: parseInt(it[0]),
            green: parseInt(it[1]),
            blue: parseInt(it[2])
        }))
        .map(rgbToHex);

}
function compare(a, b) {
    let aNumber = parseInt(a.id.replace("hour-", ""));
    let bNumber = parseInt(b.id.replace("hour-", ""));
    return aNumber - bNumber;

}
