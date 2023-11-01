//Need to add the following
//1. In the show.jsx file, display all the information that you have about a place. This includes the name, pic, city, state, and available cuisines. You can choose to display this information however you like. Get creative and borrow some styles from Bootstrap! You can alter the styles and formatting to make it your own, so we purposefully will not show answer code here, but here is a short sample as a reminder of how to access passed-in data in your views
//2. Add a Rating section. We will come back to this at a later time. For now, just add the text currently unrated.
//3. Add a Comments section. This will be blank for now, but we will revisit it later. For now, add No comments yet! or something similar.
//4. Test your code. It will have all of your own styles and the content included here:


const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">Delete</button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
