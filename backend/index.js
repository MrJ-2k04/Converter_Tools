const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');



// Check if the directory exists or not, if not then mkdir
var dir = "public";
var subdirectory = "public/uploads";
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
if (!fs.existsSync(subdirectory)) {
    fs.mkdirSync(subdirectory);
}


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(require('./routes'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
