const React = require('react');
const Def = require('./default.jsx');

const express = require('express');
const app = express();


// Define your React component
function views () {
    return(
        <Def>
            <main>
                <h1>New View</h1>
            </main>
        </Def>
    );
};

// GET /places
app.get('/', (req, res) => {
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
      res.render('places/index.jsx', { places })
});

// Define another React component
function PlacesIndex({ data }) {
  const placesFormatted = data.map((place, index) => (
    <div key={index}>
      <h2>{place.name}</h2>
      <img src={place.pic} alt={place.name} />
    </div>
  ));

  return (
    <Def>
      <main>
        <h1>PLACES INDEX PAGE</h1>
        {placesFormatted}
      </main>
    </Def>
  );
}
  
// Example data to pass to the component
const placesData = [
  {
    name: 'Place 1',
    pic: 'http://placekitten.com/250/250'
  },
  {
    name: 'Place 2',
    pic: 'http://placekitten.com/250/250'
  }
];

// Example of how to render the component
const placesIndexComponent = <PlacesIndex data={placesData} />;

module.exports = views