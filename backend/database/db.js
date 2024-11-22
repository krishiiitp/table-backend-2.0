require('dotenv').config();
const mysql = require('mysql2');
const path = require('path');
const { createTables } = require('./createTables');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
});

const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS table_backend`;

connection.query(createDatabaseQuery, (err) => {
  if (err) {
    console.error('Error creating database:', err.message);
    process.exit(1);
  }

  connection.query('USE table_backend', async (err) => {
    if (err) {
      console.error('Error selecting database:', err.message);
      process.exit(1);
    }

    console.log('Database selected successfully!');

    try {
      await createTables(connection);  
      console.log('Tables created successfully.');
    } catch (err) {
      console.error('Error creating tables:', err.message);
    }
  });
});

module.exports = connection;
