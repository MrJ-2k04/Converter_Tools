const fs = require('fs');
const sharp = require('sharp');

const jpgToPng = (req, res) => {
    const { ResponseHandler } = require('../services');
    const Res = new ResponseHandler(res);
    if (!req.file) return Res.fileNotFound();

    if (req.file.mimetype !== 'image/jpeg' && req.file.mimetype !== 'image/jpg') {
        fs.unlinkSync(req.file.path);
        return Res.badRequest('Invalid file type. Only JPEG files are supported!');
    }

    // Read the JPG image file
    const inputPath = req.file.path;

    // Create a new PNG file path by changing the extension
    const outputPath = inputPath.replace('.jpg', '.png');

    // Use sharp to convert the JPG image to PNG format
    sharp(inputPath)
        .toFormat('png')
        .png({ compressionLevel: 6 }) // Adjust compression level as needed
        .toFile(outputPath, (err, info) => {
            if (err) {
                console.error('Error converting JPG to PNG:', err);
                res.status(500).send('Error converting JPG to PNG.');
            } else {
                console.log('Conversion successful. Output file:', outputPath);
                // Send the converted PNG file for download
                res.download(outputPath, 'converted.png', (err) => {
                    if (err) {
                        console.log('Error occurred during file download:', err);
                    }

                    fs.unlinkSync(outputPath);
                    fs.unlinkSync(inputPath);
                });
            }
        });
}

module.exports = jpgToPng;
