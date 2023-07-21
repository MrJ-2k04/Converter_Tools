const express = require('express');
const multer = require('multer');
const { PDFDocument, rgb } = require('pdf-lib');
// const PDF2Pic = require('pdf2pic');
const sharp = require('sharp');
const pdf2pic = require('pdf2pic');
const fs = require('fs');
const path = require('path');

const app = express();

// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Specify the destination folder where uploaded files will be stored
      cb(null, '/uploads');
    },
    filename: function (req, file, cb) {
      // Set the filename to be the current date with the original file extension
      const uniqueSuffix = Date.now() + '-' + path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    }
  });
const upload = multer({ storage });

// Endpoint to convert JPG to PDF
app.post('/convert/jpg-to-pdf', upload.single('image'), async (req, res) => {
    try {
        const pdfDoc = await PDFDocument.create();
        const image = await pdfDoc.embedJpg(req.file.buffer);
        const page = pdfDoc.addPage();
        page.drawImage(image, {
            x: 0,
            y: 0,
            width: image.width,
            height: image.height,
        });
        const pdfBytes = await pdfDoc.save();

        res.set('Content-Type', 'application/pdf');
        res.send(pdfBytes);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Endpoint to convert PNG to PDF
app.post('/convert/png-to-pdf', upload.single('image'), async (req, res) => {
    try {
        const pdfDoc = await PDFDocument.create();
        const image = await pdfDoc.embedPng(req.file.buffer);
        const page = pdfDoc.addPage();
        page.drawImage(image, {
            x: 0,
            y: 0,
            width: image.width,
            height: image.height,
        });
        const pdfBytes = await pdfDoc.save();

        res.set('Content-Type', 'application/pdf');
        res.send(pdfBytes);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Endpoint to convert PDF to JPG
app.post('/convert/pdf-to-jpg', upload.single('pdf'), async (req, res) => {
    try {
        fs.writeFileSync(`./temp/${req.file.originalname}`, req.file.buffer);
        const converter = pdf2pic.fromPath(`./temp/${req.file.originalname}`, {
            density: 100,
            format: 'jpg',
            width: 800,
            height: 600,
        });
        //   converter.bulk()

        const result = await converter.bulk(-1);
        res.json({ imagePaths: result.map((page) => page.path) });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Endpoint to convert PDF to PNG
app.post('/convert/pdf-to-png', upload.single('pdf'), async (req, res) => {
    try {
        const pdfPath = req.file.path;
        const pdf2pic = new PDF2Pic({
            density: 100,
            savename: false,
            savedir: './uploads',
            format: 'png',
        });
        const result = await pdf2pic.convert(pdfPath);
        const imagePaths = result.map((page) => page.path);

        res.json({ imagePaths });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Endpoint to convert PNG to JPG
app.post('/convert/png-to-jpg', upload.single('image'), async (req, res) => {
    try {
        const convertedImage = await sharp(req.file.buffer)
            .toFormat('jpeg')
            .toBuffer();

        res.set('Content-Type', 'image/jpeg');
        res.send(convertedImage);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Endpoint to resize PDF
app.post('/resize/pdf', upload.single('pdf'), async (req, res) => {
    try {
        const pdfPath = `./temp/${req.file.originalname}`;
        fs.writeFileSync(pdfPath, req.file.buffer);

        const pdfDoc = await PDFDocument.load(fs.readFileSync(pdfPath));
        const pages = pdfDoc.getPages();
        const resizedPdfPath = './uploads/resized.pdf';
        const resizedPdfDoc = await PDFDocument.create();

        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            const { width, height } = page.getSize();

            const resizedPage = resizedPdfDoc.addPage([500, 500]);
            const embeddedPage = await resizedPdfDoc.embedPage(page);

            resizedPage.drawPage(embeddedPage, {
                x: 0,
                y: 0,
                width: width,
                height: height,
            });
        }

        const resizedPdfBytes = await resizedPdfDoc.save();

        res.set('Content-Type', 'application/pdf');
        res.set('Content-Disposition', 'attachment; filename=resized.pdf');
        res.send(resizedPdfBytes);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

const outputFilePath = Date.now() + "output.pdf";
// Image to PDF
app.post('/convert/image-to-pdf', upload.array('files'), (req, res) => {
    if (req.files) {
        const pdfDoc = new PDFDocument();
        const outputStream = fs.createWriteStream(outputFilePath);

        req.files.forEach(file => {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                pdfDoc.image(file.path);
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
    } else {
        res.status(400).send('No files uploaded.');
    }
});


app.get("*", (req, res) => res.end("Server status: OK"));

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
