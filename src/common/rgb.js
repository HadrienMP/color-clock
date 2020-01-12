export function rgbToHex(numericRGB) {
    return "#"
        + toHex(numericRGB["red"])
        + toHex(numericRGB["green"])
        + toHex(numericRGB["blue"])
}

function toHex(value) {
    return addMissingLeftZero(value.toString(16));
}

function addMissingLeftZero(missingZeros) {
    let withZeros = "0" + missingZeros;
    return withZeros.substr(withZeros.length - 2, withZeros.length);
}