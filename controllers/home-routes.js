const router = require('express').Router();
const sequelize = require('../config/connection');
// const { Cat, User, Comment,} = require('../models');



// get all cat posts for homepage
router.get('/', async (req, res) => {
    res.render('homepage');
  });
