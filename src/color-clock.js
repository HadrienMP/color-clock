export function toColor(time) {
    return "#"
        + toHex(time.getHours(), 24)
        + toHex(time.getMinutes(), 60)
        + toHex(time.getSeconds(), 60)
}

function toHex(value, max) {
    let result = Math.floor(value * 255 / (max - 1)).toString(16);
    return addMissingLeftZero(result);
}

function addMissingLeftZero(missingZeros) {
    let withZeros = "0" + missingZeros;
    return withZeros.substr(withZeros.length - 2, withZeros.length);
}
