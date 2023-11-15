const router = require('express').Router();
const db = require('../models')

//Gets Index page/
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
  if (!req.body.pic) {
    //Default image if one is not found
    req.body.pic = './public/images/BeachLife.jpg'
  }

  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError'){
      let message = 'Validation Error: '
      for (var field in err.errors){
        message += `${field} was ${err.errors[field].value}. `
        massage += `${err.errors[field].message}` 
      }
      console.log('Validation error message', message)
      // TODO: Generate error message
      res.render('/places/new', {message})
    }
    else {
      res.render('errer404')
    }
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

//Show route
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//PUT Route for Edit: put the user's edits back into our places array
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // // Dig into req.body and make sure data is valid
      // if (!req.body.pic) {
      //     // Default image if one is not provided
      //     req.body.pic = 'http://placekitten.com/400/400'
      // }
      // if (!req.body.city) {
      //     req.body.city = 'Anytown'
      // }
      // if (!req.body.state) {
      //     req.body.state = 'USA'
      // }
      res.render(`places/show`, {place: places[id], id})
      // Save the new data into places[id]
      // places[id] = req.body
      res.redirect(`/places/show`)
  }
})


router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub');
});

//Edit Page Route
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // console.log(places[id])
      res.render('places/edit', { place: places[id], id })
  }
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
