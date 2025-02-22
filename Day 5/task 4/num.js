const process = require("process");

function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <number>");
} else {
    const num = parseInt(process.argv[2], 10);
    if (isNaN(num)) {
        console.log("Please enter a valid integer.");
    } else {
        printMultiplicationTable(num);
    }
}