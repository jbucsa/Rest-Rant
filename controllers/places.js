const router = require('express').Router();
const db = require('../models')

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
});


router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('errer404')
  })
});

router.get('/new', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/new', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
});

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub');
});

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub');
});

router.get('/:id/edit', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/edit', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
});

router.post('/:id/rant', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/:id/rant')
  })
  .catch(err => {
    console.log('err', err)
    res.render('errer404')
  })
});

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub');
});

module.exports = router;
