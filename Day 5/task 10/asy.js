const fs = require('fs').promises;
const path = require('path');

function readFile(filename) {
    return fs.readFile(filename, 'utf8');
}

function processContent(content) {
    return content.toUpperCase(); // Example processing: Convert text to uppercase
}

function writeFile(filename, content) {
    return fs.writeFile(filename, content, 'utf8');
}

const inputFile = path.resolve('input.txt');
const outputFile = path.resolve('output.txt');

readFile(inputFile)
    .then(content => {
        console.log('File read successfully.');
        return processContent(content);
    })
    .then(processedContent => {
        console.log('Content processed successfully.');
        return writeFile(outputFile, processedContent);
    })
    .then(() => {
        console.log('Processed content written to file successfully.');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
