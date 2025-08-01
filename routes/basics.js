const express = require('express');
const router = express.Router();

router.get('/variable', (req, res) => {
  res.render('basic-variable');
});

router.get('/loops', (req, res) => {
  res.render('basic-loops');
});

router.get('/function', (req, res) => {
  res.render('basic-function');
});

router.get('/conditional', (req, res) => {
  const temperature = 25;
  let message;
  
  if (temperature < 15) {
    message = "<p>Snow will come.</p>";
  } else if (temperature >= 15 && temperature < 25) {
    message = "<p>Nice weather to have a picnic</p>";
  } else if (temperature >= 25 && temperature < 35) {
    message = "<p>Summer is coming</p>";
  } else {
    message = "<p>Woah! It's very hot!</p>";
  }
  
  res.render('basic-conditional', { temperature, message });
});

router.get('/comment', (req, res) => {
  res.render('basic-comment');
});

router.get('/array', (req, res) => {
  res.render('basic-array');
});

module.exports = router; 