const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.post('/reviews', (req, res) => {
  const { UserID, NGOID, Rating, ReviewText } = req.body;

  if (!UserID || !NGOID || !Rating) {
    return res.status(400).json({ message: 'UserID, NGOID, and Rating are required' });
  }

  if (Rating < 1 || Rating > 5) {
    return res.status(400).json({ message: 'Rating must be between 1 and 5' });
  }

  const query = `
    INSERT INTO ReviewsTable (UserID, NGOID, Rating, ReviewText, CreatedAt)
    VALUES (?, ?, ?, ?, CURDATE())
  `;

  db.query(query, [UserID, NGOID, Rating, ReviewText], (err, results) => {
    if (err) {
      console.error('Error inserting review:', err.message);
      return res.status(500).json({ message: 'Error adding review', error: err.message });
    }

    res.status(201).json({
      message: 'Review added successfully',
      reviewId: results.insertId,
    });
  });
});

module.exports = router;
