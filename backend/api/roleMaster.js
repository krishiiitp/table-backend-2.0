const express = require('express');
const router = express.Router();
const db = require('../database/db.js'); 

router.post('/role-master', (req, res) => {
  const { RoleName } = req.body;

  if (!RoleName) {
    return res.status(400).json({ message: 'RoleName is required' });
  }

  const query = `
    INSERT INTO RoleMaster (RoleName)
    VALUES (?)
  `;

  db.query(query, [RoleName], (err, results) => {
    if (err) {
      console.error('Error inserting role:', err.message);
      return res.status(500).json({ message: 'Error adding role', error: err.message });
    }

    res.status(201).json({
      message: 'Role added successfully',
      roleId: results.insertId,
    });
  });
});

module.exports = router;
