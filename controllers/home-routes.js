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
    const cats = dbCatData.map(post => post.get({ plain: true }));
    // pass a single cat object into the homepage template
    res.render('homepage', { cats });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;