const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.post('/user-registration', (req, res) => {
  const { UserFname, UserLname, Address1, Address2, Address3, City, StateVal, Pincode, Contact, Email } = req.body;

  const query = `
    INSERT INTO UserRegistration (UserFname, UserLname, Address1, Address2, Address3, City, StateVal, Pincode, Contact, Email)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [UserFname, UserLname, Address1, Address2, Address3, City, StateVal, Pincode, Contact, Email],
    (err, results) => {
      if (err) {
        console.log('Error inserting user:', err.message);
        return res.status(500).json({ message: 'Error registering user', error: err.message });
      }
      res.status(201).json({ message: 'User registered successfully', userId: results.insertId });
    }
  );
});

module.exports = router;
