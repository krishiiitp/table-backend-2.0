const express = require('express');
const app = express();
const apiRoutes = require('./api');
require('./database/db.js');

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
