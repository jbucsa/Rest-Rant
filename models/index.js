require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});


// Right here, the index.js file in the models folder is making a one-stop shop for our connection information and access to all of our models
module.exports.Place = require('./places');
module.exports.Comment = require('./comment');