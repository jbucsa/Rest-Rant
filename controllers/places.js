const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index.jsx');
});

router.get('*', (req, res) => {
    res.render('/error404.jsx');
});


module.exports = router
