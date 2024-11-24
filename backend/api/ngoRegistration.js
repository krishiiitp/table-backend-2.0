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

router.get('/ngo-registration/:workId', (req, res) => {
  const { workId } = req.params;

  const query = `
    SELECT * FROM NGORegistration WHERE WorkID = ?
  `;

  db.query(query, [workId], (err, results) => {
    if (err) {
      console.error('Error fetching NGOs by WorkID:', err.message);
      return res.status(500).json({ message: 'Error fetching NGOs', error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'No NGOs found for the given WorkID' });
    }
    res.status(200).json({ message: 'NGOs fetched successfully', data: results });
  });
});

module.exports = router;
