const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const cors = require('cors');
app.use(cors());

// Serve static files
// app.use(express.static('assets'));

// API to fetch image paths
app.get('/get-images', (req, res) => {
    const directoryPath = path.join(__dirname, 'gallery');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)).map(file => `gallery/${file}`);
        res.json(images);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://192.168.164.103:${PORT}`);
});
