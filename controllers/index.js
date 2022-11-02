// const router = require('express').Router();

// // const apiRoutes = require('./api/');
// const homeRoutes = require('./home-routes.js');
// // const dashboardRoutes = require('./dashboard-routes.js');

// router.use('/', homeRoutes);
// // router.use('/dashboard', dashboardRoutes);
// // router.use('/api', apiRoutes);

// module.exports = router;





// in order to test User routes I, Svetlana, commented out the portion above.

const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

