
const express = require('express');
const router = express.Router();
const { pdfToImage, imageToPdf, pngToJpg, jpgToPng } = require('../controllers');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdfpoppler = require('pdf-poppler');
const { PDFDocument } = require('pdf-lib');
const ZipLocal = require('zip-local');


// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the destination folder where uploaded files will be stored
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
        // Set the filename to be the current date with the original file extension
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix);
        // cb(null, `file${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage });



router.post("/convert/image-to-pdf", upload.array('files'), imageToPdf);
router.post("/convert/pdf-to-jpg", upload.single('file'), pdfToImage.toFormat('jpeg'));
router.post("/convert/pdf-to-png", upload.single('file'), pdfToImage.toFormat('png'));
router.post("/convert/png-to-jpg", upload.single('file'), pngToJpg);
router.post("/convert/jpg-to-png", upload.single('file'), jpgToPng);

module.exports = router;