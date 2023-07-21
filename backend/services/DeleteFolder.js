const fs = require('fs');
const path = require('path');

async function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        try {
            // Wait for any asynchronous file operations to complete before proceeding
            await Promise.all(
                fs.readdirSync(folderPath).map((file) => {
                    const curPath = path.join(folderPath, file);
                    if (fs.lstatSync(curPath).isDirectory()) {
                        // Recursively delete subdirectories
                        return deleteFolderRecursive(curPath);
                    } else {
                        // Delete files within the folder
                        return fs.promises.unlink(curPath);
                    }
                })
            );

            // After deleting all files and subdirectories, remove the empty folder
            await fs.promises.rmdir(folderPath);
        } catch (error) {
            console.error('Error deleting folder:', error.message);
        }
    } else {
        console.log('Folder does not exist:', folderPath);
    }
}

module.exports = deleteFolderRecursive;