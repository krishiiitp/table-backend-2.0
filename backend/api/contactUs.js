const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.post('/contact-us', (req, res) => {
  const { NameVal, Email, SubjectVal, StatusVal } = req.body;

  if (!NameVal || !Email || !SubjectVal || !StatusVal) {
    return res.status(400).json({ message: 'Name, Email, Subject, and Status are required' });
  }

  const query = `
    INSERT INTO ContactUs (NameVal, Email, SubjectVal, StatusVal)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [NameVal, Email, SubjectVal, StatusVal], (err, results) => {
    if (err) {
      console.error('Error inserting contact query:', err.message);
      return res.status(500).json({ message: 'Error adding contact query', error: err.message });
    }

    res.status(201).json({
      message: 'Contact query added successfully',
      contactId: results.insertId,
    });
  });
});

module.exports = router;
