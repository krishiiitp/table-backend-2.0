const express = require('express');
const router = express.Router();

const userRoutes = require('./userRegistration');
const ngoRegistrationRoutes = require('./ngoRegistration');
const ngoWorkingAreaRoutes = require('./ngoWorkingArea');
const reviewsTableRoutes = require('./reviewTable')
const contactUsRoutes = require('./contactUs')
const roleMasterRoutes = require('./roleMaster')
const requestTableRoutes = require('./requestTable')

router.use('/', userRoutes);
router.use('/', ngoRegistrationRoutes);
router.use('/', ngoWorkingAreaRoutes);
router.use('/', reviewsTableRoutes);
router.use('/', contactUsRoutes);
router.use('/',roleMasterRoutes)
router.use('/',requestTableRoutes)

module.exports = router;
