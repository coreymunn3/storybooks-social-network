const express = require('express');
const passport = require('passport');
const router = express.Router();

// authenticate with Google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// Google auth callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) =>
    // Successful authentication, redirect home.
    res.redirect('/dashboard')
);

// get current user
router.get('/currentuser', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.json({});
  }
});

// Log Out
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = router;
