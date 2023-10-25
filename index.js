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

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('*', (req, res) => {
  res.send('404 page');
});

app.listen(process.env.PORT);
