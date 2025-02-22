const process = require("process");

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <number>");
} else {
    const num = parseInt(process.argv[2], 10);
    if (isNaN(num)) {
        console.log("Please enter a valid integer.");
    } else {
        checkEvenOdd(num);
    }
}