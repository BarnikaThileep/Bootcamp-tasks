const fs = require('fs');
const path = require('path');

function createFile(filename) {
    fs.writeFile(filename, '', (err) => {
        if (err) {
            console.error(`Error creating file ${filename}:`, err);
        } else {
            console.log(`File ${filename} created successfully.`);
        }
    });
}

function deleteFile(filename) {
    fs.unlink(filename, (err) => {
        if (err) {
            console.error(`Error deleting file ${filename}:`, err);
        } else {
            console.log(`File ${filename} deleted successfully.`);
        }
    });
}

function showHelp() {
    console.log(`Usage:
    my-tool create <filename> - Create a file
    my-tool delete <filename> - Delete a file`);
}

const args = process.argv.slice(2);
if (args.length < 2) {
    showHelp();
} else {
    const command = args[0];
    const filename = path.resolve(args[1]);
    
    switch (command) {
        case 'create':
            createFile(filename);
            break;
        case 'delete':
            deleteFile(filename);
            break;
        default:
            console.error('Unknown command:', command);
            showHelp();
    }
}
