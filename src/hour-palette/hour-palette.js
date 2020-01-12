const palette = [
    "#00feff",
    "#00ff1b",
    "#b8ff02",
    "#fff400",
    "#ffc700",
    "#ff8200",
    "#ff0800",
    "#ff00f1",
    "#9a00ff",
    "#0300ff",
    "#007eff",
    "#00a8ff"
];

export function toColor(time) {
    return palette[(time.getHours() % 12) - 1];
}

import {setup} from "../gui.js";
setup(toColor);