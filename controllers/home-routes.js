const router = require('express').Router();
const { Cat, User, Comment } = require('../models');


router.get('/', (req, res) => {
  Cat.findAll({
    attributes: [
      'id',
      'name',
      'age',
      'description',
      'personality',
      'status',
      'image_url',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'cat_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbCatData => {
    const cats = dbCatData.map(cat => cat.get({ plain: true }));
    // pass a single cat object into the homepage template
    res.render('homepage', {
      cats,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// single cat post route
router.get('/cat/:id', (req, res) => {
  Cat.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'image_url', 'name', 'age', 'description', 'personality', 'status', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'cat_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbCatData => {
      if (!dbCatData) {
        res.status(404).json({ message: 'No cat found with this id' });
        return;
      }

      const cat = dbCatData.get({ plain: true });

      res.render('single-catpage', {
        cat,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;