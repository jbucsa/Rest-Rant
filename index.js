//Check List

//1. Create Project Folder
//2. Creating package.json
//3. Create package.json file
//3a   In the terminal type: npm init 
//3b. Complete additional steps for package.json document. 
//3(z). Once package.json is complete, type: yes.
// The package.json is not complete.
//5. Create index.js file
// type: touch index.js
// Javascript file is complete.
//6 Create HTML file
// type: touch index.html
//7. Require express at the top of the file

// 8. Initialize the app variable

//9. Create the home page route
//9a. Call app.get()
//9b. Set ‘/‘ as the path (first arg)
//9c. Write callback function with req, res
//9d. Call res.send(‘hello world’) 

//10. Call app.listen(3000) to keep server open

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path'); // Import the 'path' module to manage file paths

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
// Use the places.js route. Note the .".js" is not needed here. Changed places.js to places.jsx.
app.use('/places', require('./controllers/places'));

app.use('/new', require('./controllers/new'));


app.get('/', (req, res) => {
  res.render('home'); // Remove the '.jsx' extension from res.render calls as it's not necessary when using the view engine specified earlier. 
});

app.get('*', (req, res) => {
  res.render('error404'); // Remove the '.jsx' extension from res.render calls as it's not necessary when using the view engine specified earlier. 
});


const PORT = process.env.PORT || 2000; // Set a default port (e.g., 3000)
//Added a default PORT value, in case the process.env.PORT is not set, and logged the port on which the server is running.
//app.listen(process.env.PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

