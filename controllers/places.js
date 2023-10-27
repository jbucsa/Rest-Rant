const router = require('express').Router()

// router.get('/', (req, res) => {
//     res.render('places/index.jsx');
// });

// GET /places
router.get('/', (req, res) => {
    let places = [{
           name: 'H-Thai-ML',
           city: 'Seattle',
           state: 'WA',
           cuisines: 'Thai, Pan-Asian',
           pic: 'http://placekitten.com/250/250'
         }, 
         {
           name: 'Coding Cat Cafe',
           city: 'Phoenix',
           state: 'AZ',
           cuisines: 'Coffee, Bakery',
           pic: 'http://placekitten.com/250/250'
         }];
         
         // Render the 'places/index.jsx' view with the places data
         res.render('places/index', { places })
   });




module.exports = router
