const fs = require("fs");
const process = require("process");

function getFileInfo(filePath) {
    try {
        const stats = fs.statSync(filePath);
        console.log(`File Size: ${stats.size} bytes`);
        console.log(`Creation Date: ${stats.birthtime}`);
        console.log(`Last Modified Date: ${stats.mtime}`);
    } catch (error) {
        console.error("Error: Unable to retrieve file info. Make sure the file path is correct.");
    }
}

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <file-path>");
} else {
    const filePath = process.argv[2];
    getFileInfo(filePath);
}
