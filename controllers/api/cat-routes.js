const router = require('express').Router();
const { Cat, User, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Cat.findAll({
        attributes: ['id', 'name', 'age','description', 'personality', 'status', 'created_at'],
        order: [['created_at', 'DESC']],
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
        .then(dbCatData => res.json(dbCatData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Cat.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'image_url', 'name', 'age','description', 'personality', 'status', 'created_at'],
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
                res.status(404).json({ message: 'No cats found with this id' });
                return;
            }
            res.json(dbCatData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // expects {name: 'Lynx', age: '3 months', description: 'Lorem ipsum...', personality: 'kind, loving', status: 'available' }
    Cat.create({
        name: req.body.name,
        age: req.body.age,
        description: req.body.description,
        personality: req.body.personality,
        status: req.body.status,
        user_id: req.body.user_id
    })
        .then(dbCatData => res.json(dbCatData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Cat.update(
        {
            name: req.body.name,
            age: req.body.age,
            description: req.body.description,
            personality: req.body.personality,
            status: req.body.status,
            user_id: req.body.user_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbCatData => {
            if (!dbCatData) {
                res.status(404).json({ message: 'No cat found with this id' });
                return;
            }
            res.json(dbCatData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Cat.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCatData => {
            if (!dbCatData) {
                res.status(404).json({ message: 'No cat found with this id' });
                return;
            }
            res.json(dbCatData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;