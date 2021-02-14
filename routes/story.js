const express = require('express');
const router = express.Router();
const Story = require('../models/Story');

router.get('/', async (req, res) => {
  try {
    const stories = await Story.find({ _user: req.user._id });
    res.status(200).json(stories);
  } catch (error) {
    res.status(404).json({ message: 'No Stories Found' });
  }
});

module.exports = router;
