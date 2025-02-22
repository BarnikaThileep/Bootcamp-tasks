const process = require("process");

function reverseString(str) {
    return str.split("").reverse().join("");
}

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <string>");
} else {
    const inputString = process.argv[2];
    console.log(reverseString(inputString));
}
