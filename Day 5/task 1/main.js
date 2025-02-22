// Get command-line arguments
const args = process.argv.slice(2);

// Check if two arguments are provided
if (args.length !== 2) {
    console.log("Usage: node script.js <num1> <num2>");
    process.exit(1);
}

// Parse numbers
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Validate input
if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide two valid numbers.");
    process.exit(1);
}

// Compute and print the sum
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
