const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.post('/ngo-registration', (req, res) => {
  const { 
    NGOname, Address_1, Address_2, Address_3, City, StateVal, Pincode, Contact, 
    Email, DescriptionVal, Photo, Website, WorkID, Proof 
  } = req.body;

  const query = `
    INSERT INTO NGORegistration (NGOname, Address_1, Address_2, Address_3, City, StateVal, 
      Pincode, Contact, Email, DescriptionVal, Photo, Website, WorkID, Proof)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [NGOname, Address_1, Address_2, Address_3, City, StateVal, Pincode, Contact, 
    Email, DescriptionVal, Photo, Website, WorkID, Proof],
    (err, results) => {
      if (err) {
        console.error('Error inserting NGO:', err.message);
        return res.status(500).json({ message: 'Error registering NGO', error: err.message });
      }
      res.status(201).json({ message: 'NGO registered successfully', ngoId: results.insertId });
    }
  );
});

module.exports = router;
