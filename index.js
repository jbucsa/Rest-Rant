//Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path'); // Import the 'path' module to manage file paths
const methodOverride = require('method-override');



//Express Settings

app.set('view engine', 'jsx', 'views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());


// Use the places.js route. Note the .".js" is not needed here. Changed places.js to places.jsx.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('method'));


// Controllers & Routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('home'); // Remove the '.jsx' extension from res.render calls as it's not necessary when using the view engine specified earlier. 
});

app.get('*', (req, res) => {
  res.render('error404'); // Remove the '.jsx' extension from res.render calls as it's not necessary when using the view engine specified earlier. 
});


const PORT = process.env.PORT || 2000; // Set a default port (e.g., 3000)
//Added a default PORT value, in case the process.env.PORT is not set, and logged the port on which the server is running.
//app.listen(process.env.PORT);

// Listen for Connections
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

