const router = require('express').Router();
// const withAuth = require('../utils/auth');
const { Cat, User, Comment } = require('../models');


router.get('/', (req, res) => {
  Cat.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
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
        attributes: ['id', 'comment_text', 'cat_id', 'user_id', 'created_at'],
        include: [
          {
          model: User,
          attributes: ['username']
        }
      ]
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbCatData => {
      // serialize data before passing to template
      const cats = dbCatData.map(cat => cat.get({ plain: true }));
      res.render('dashboard', { cats, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
  Cat.findByPk(req.params.id, {
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
      if (dbCatData) {
        const cat = dbCatData.get({ plain: true });
        
        res.render('edit-catinfo', {
          cat,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router;
