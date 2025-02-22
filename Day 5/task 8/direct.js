const fs = require('fs');
const path = require('path');

function traverseDirectory(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${dir}:`, err);
            return;
        }
        
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            
            fs.stat(fullPath, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats of ${fullPath}:`, err);
                    return;
                }
                
                if (stats.isDirectory()) {
                    console.log(`Directory: ${fullPath}`);
                    traverseDirectory(fullPath); // Recursive call for subdirectory
                } else {
                    console.log(`File: ${fullPath}`);
                }
            });
        });
    });
}

// Example usage:
const directoryToTraverse = './'; // Change this to the directory you want to start from
traverseDirectory(directoryToTraverse);