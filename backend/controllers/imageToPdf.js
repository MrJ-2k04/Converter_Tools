
const fs = require('fs');
const PDFDocument = require('pdfkit');
const outputFilePath = Date.now() + "output.pdf";

const imageToPdf = (req, res) => {
    const { ResponseHandler } = require('../services');
    const Res = new ResponseHandler(res);
    if (!req.files || req.files.length === 0) return Res.fileNotFound();



    const pdfDoc = new PDFDocument({ autoFirstPage: false }); // Set custom PDF size
    const outputStream = fs.createWriteStream(outputFilePath);

    req.files.forEach(file => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            const imageBuffer = fs.readFileSync(file.path);
            const image = pdfDoc.openImage(imageBuffer);
            pdfDoc.addPage({ size: [image.width, image.height] }); // Create a page with the same size as the image
            pdfDoc.image(image, 0, 0, { width: image.width, height: image.height }); // Place the image on the page
        }
    });

    pdfDoc.pipe(outputStream);
    pdfDoc.end();

    outputStream.on('finish', () => {
        res.download(outputFilePath, 'converted.pdf', (err) => {
            if (err) {
                console.log('Error occurred during file download:', err);
            }
            // Delete the temporary PDF file
            fs.unlinkSync(outputFilePath);
            // Delete the uploaded image files
            req.files.forEach(file => {
                fs.unlinkSync(file.path);
            });
        });
    });

}

module.exports = imageToPdf;