const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const catRoutes = require('./cat-routes');

router.use('/users', userRoutes);
router.use('/cats', catRoutes);

module.exports = router;