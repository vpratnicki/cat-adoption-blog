const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Poor Phil! I hope he finds a home soon!',
        user_id: '1',
        cat_id: '1'
    },
    {
        comment_text: "I would love to meet her! I'm messaging you now.",
        user_id: '2',
        cat_id: '2'
    },
    {
        comment_text: 'It breaks my heart that people are so heartless.',
        user_id: '3',
        cat_id: '3'
    },
    {
        comment_text: 'Do you think he would do well with other cats?',
        user_id: '4',
        cat_id: '4'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;