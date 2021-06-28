const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        post_url: 'https://applenews.com/press',
        title: 'Apple is going out of business!',
        created_at: new Date(),
        vote_count: 10,
        comments: [{}, {}],
        user: {
            username: 'josephporrazzo'
        }
    });
});

module.exports = router;