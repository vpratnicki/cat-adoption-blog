const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Cat, User, Comment,} = require('../models');



router.get('/', (req, res) => {
    res.render('homepage');
  });

  module.exports = router;