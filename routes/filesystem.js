const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataDir = path.join(__dirname, '../public/data');

// List files
router.get('/list', (req, res) => {
  // Simulate drive letters (Windows style)
  const drives = ['C:', 'D:', 'E:'];
  
  // Get folder information
  const folderURL = '/';
  const folderPath = __dirname;
  const folderSize = '0'; // Placeholder
  const folderCreated = new Date().toLocaleString();
  
  // Get file information
  const fileURL = '/default.asp';
  const filePath = path.join(__dirname, 'app.js');
  const fileSize = '0'; // Placeholder
  const fileCreated = new Date().toLocaleString();
  
  res.render('fso-list', { 
    drives, 
    folderURL, 
    folderPath, 
    folderSize, 
    folderCreated,
    fileURL,
    filePath,
    fileSize,
    fileCreated
  });
});

// Read file
router.get('/readfile', (req, res) => {
  const file = req.query.file || 'cities.txt';
  fs.readFile(path.join(dataDir, file), 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');
    res.render('fso-readfile', { file, data });
  });
});

// Write file
router.get('/writefile', (req, res) => {
  res.render('fso-writefile', { message: '' });
});

router.post('/writefile', (req, res) => {
  const { filename, content } = req.body;
  if (!filename || !content) return res.status(400).send('Filename and content required');
  fs.writeFile(path.join(dataDir, filename), content, err => {
    if (err) return res.status(500).send('Error writing file');
    res.render('fso-writefile', { message: 'File written successfully' });
  });
});

// Write file append
router.get('/writefile-append', (req, res) => {
  res.render('fso-writefile-append', { message: '' });
});

router.post('/writefile-append', (req, res) => {
  const { filename, content } = req.body;
  if (!filename || !content) return res.status(400).send('Filename and content required');
  fs.appendFile(path.join(dataDir, filename), content, err => {
    if (err) return res.status(500).send('Error appending file');
    res.render('fso-writefile-append', { message: 'File appended successfully' });
  });
});

module.exports = router; 