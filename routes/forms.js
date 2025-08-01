const express = require('express');
const router = express.Router();

// GET form
router.get('/get', (req, res) => {
  const { title, content, category, status } = req.query;
  res.render('form-get', { 
    title: title || '', 
    content: content || '', 
    category: category || '', 
    status: status || '' 
  });
});

// GET form with validation
router.get('/get-validation', (req, res) => {
  res.render('form-get-validation', { errors: null, values: {} });
});

router.post('/get-validation', (req, res) => {
  const errors = [];
  const { name } = req.body;
  if (!name) errors.push('Name is required');
  res.render('form-get-validation', { errors, values: req.body });
});

// POST form
router.get('/post', (req, res) => {
  res.render('form-post', { 
    title: '', 
    content: '', 
    category: '', 
    status: '' 
  });
});

router.post('/post', (req, res) => {
  const { title, content, category, status } = req.body;
  res.render('form-post', { 
    title: title || '', 
    content: content || '', 
    category: category || '', 
    status: status || '' 
  });
});

// POST form with validation
router.get('/post-validation', (req, res) => {
  res.render('form-post-validation', { errors: null, values: {} });
});

router.post('/post-validation', (req, res) => {
  const errors = [];
  const { name } = req.body;
  if (!name) errors.push('Name is required');
  res.render('form-post-validation', { errors, values: req.body });
});

module.exports = router; 