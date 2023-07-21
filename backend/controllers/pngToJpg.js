
const fs = require('fs');
const sharp = require('sharp');

const pngToJpg = (req, res) => {
    const { ResponseHandler } = require('../services');
    const Res = new ResponseHandler(res);
    if (!req.file) return Res.fileNotFound();

    if (req.file.mimetype !== 'image/png') {
        fs.unlinkSync(req.file.path);
        return Res.badRequest('Invalid file type. Only PNG files are supported!');
    }


    // Read the PNG image file
    const inputPath = req.file.path;

    // Create a new JPG file path by changing the extension
    const outputPath = inputPath.replace('.png', '.jpg');

    // Use sharp to convert the PNG image to JPG format
    sharp(inputPath)
        .toFormat('jpeg')
        .jpeg({ quality: 80 })
        .toFile(outputPath, (err, info) => {
            if (err) {
                console.error('Error converting PNG to JPG:', err);
                res.status(500).send('Error converting PNG to JPG.');
            } else {
                console.log('Conversion successful. Output file:', outputPath);
                // Send the converted JPG file for download
                res.download(outputPath, 'converted.jpg', (err) => {
                    if (err) {
                        console.log('Error occurred during file download:', err);
                    }

                    fs.unlinkSync(outputPath);
                    fs.unlinkSync(inputPath);
                });
            }
        });

}


module.exports = pngToJpg;