

const pdfPoppler = require('pdf-poppler');
const ZipLocal = require('zip-local');
const fs = require('fs');
const path = require('path');
const { deleteFolder } = require('../services')

const pdfToImage = {
    toFormat: (format) => async (req, res) => {
        const { ResponseHandler } = require('../services');
        const Res = new ResponseHandler(res);
        if (!req.file) return Res.fileNotFound();

        const file = req.file;


        if (file.mimetype !== 'application/pdf') {
            // Invalid file type
            try { fs.unlinkSync(file.path); } catch (error) {
                console.log(error.message);
            }
            return Res.badRequest('Invalid file type. Only PDF files are supported.');
        }



        const tempImageFolderName = `pdf_images_${Date.now()}`;
        const tempImagePath = path.join('public', tempImageFolderName);

        // Create Folder for Temporary Converted Images
        try { fs.mkdirSync(tempImagePath); } catch (error) { }

        try {
            await pdfPoppler.convert(file.path, {
                format,
                out_dir: tempImagePath,
                out_prefix: `image`,
                page: null,
            });
            // Create a ZIP archive of the converted PNG images using zip-local
            const zipFilePath = path.join(tempImagePath, 'Converted_images.zip');
            ZipLocal.sync.zip(tempImagePath).compress().save(zipFilePath);

            // Send the ZIP file for download
            res.sendFile(path.resolve(zipFilePath), async (err) => {
                // Cleanup: Delete the uploaded PDF file and PNG images
                try {
                    fs.unlinkSync(file.path);
                    deleteFolder(tempImagePath);
                } catch (error) {
                    console.error(error.message);
                }

                if (err) {
                    console.error('Error occurred during file download:', err.message);
                    return Res.serverError();
                }
            });

        } catch (error) {
            console.error(error.message);
            try { fs.unlinkSync(file.path); deleteFolder(tempImagePath); } catch (error) {
                console.error(error.message);
            }
            Res.serverError();
        }
    },
}

module.exports = pdfToImage;