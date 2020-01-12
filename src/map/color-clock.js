import {rgbToHex} from "../common/rgb.js";

export function toColor(time) {
    return rgbToHex({
        "red": to255(time.getHours(), 24),
        "green": to255(time.getMinutes(), 60),
        "blue": to255(time.getSeconds(), 60)
    });
}

function to255(value, max) {
    const rate = value * 255 / (max - 1);
    return Math.floor(rate);
}
