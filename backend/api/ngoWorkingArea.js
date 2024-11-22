const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.post('/ngo-working-area', (req, res) => {
  const { WorkingName, Proof } = req.body;

  const query = `
    INSERT INTO NGOWorkingArea (WorkingName, Proof)
    VALUES (?, ?)
  `;

  db.query(query, [WorkingName, Proof], (err, results) => {
    if (err) {
      console.error('Error inserting working area:', err.message);
      return res.status(500).json({ message: 'Error adding working area', error: err.message });
    }
    res.status(201).json({ message: 'Working area added successfully', workId: results.insertId });
  });
});

module.exports = router;
