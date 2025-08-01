const express = require('express');
const router = express.Router();

// Simple session example
router.get('/simple', (req, res) => {
  res.render('session-simple', { currentUser: req.session.currentUser });
});

router.post('/simple', (req, res) => {
  const { submit } = req.body;
  
  if (submit === 'Logout') {
    // remove session
    req.session.currentUser = '';
  } else if (submit === 'Login') {
    // set session
    req.session.currentUser = 'Park Kwang Hoo!';
  }
  
  res.render('session-simple', { currentUser: req.session.currentUser });
});

// Login session example (placeholder)
router.get('/login', (req, res) => {
  res.render('session-login');
});

router.post('/login', (req, res) => {
  // TODO: Implement login logic
  res.send('Login logic not implemented yet.');
});

module.exports = router; 