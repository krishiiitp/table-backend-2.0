const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.post('/request', (req, res) => {
  const { UserID, NGOID, WorkID, StatusVal } = req.body;

  if (!UserID || !NGOID || !WorkID || !StatusVal) {
    return res.status(400).json({ message: 'UserID, NGOID, WorkID, and StatusVal are required' });
  }

  const createdAt = new Date().toISOString().split('T')[0];
  const updatedAt = createdAt; 

  const query = `
    INSERT INTO RequestTable (UserID, NGOID, WorkID, CreatedAt, UpdatedAt, StatusVal)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [UserID, NGOID, WorkID, createdAt, updatedAt, StatusVal], (err, results) => {
    if (err) {
      console.error('Error inserting request:', err.message);
      return res.status(500).json({ message: 'Error adding request', error: err.message });
    }

    res.status(201).json({
      message: 'Request added successfully',
      requestId: results.insertId,
    });
  });
});

module.exports = router;
