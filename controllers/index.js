const dashboardRoutes = require('./dashboard-routes.js');
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const isAdmin = require('../utils/admin')
const withAuth = require('../utils/auth')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', withAuth, isAdmin, dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

