//Need to add the following
//1. In the show.jsx file, display all the information that you have about a place. This includes the name, pic, city, state, and available cuisines. You can choose to display this information however you like. Get creative and borrow some styles from Bootstrap! You can alter the styles and formatting to make it your own, so we purposefully will not show answer code here, but here is a short sample as a reminder of how to access passed-in data in your views
//2. Add a Rating section. We will come back to this at a later time. For now, just add the text currently unrated.
//3. Add a Comments section. This will be blank for now, but we will revisit it later. For now, add No comments yet! or something similar.
//4. Test your code. It will have all of your own styles and the content included here:


const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value="Delete Comment" />
          </form>
        </div>
      )
    })
  }

  
    return (
      <Def>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img src={data.place.pic} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
            </div>
            <div className="col-sm-6">
              <h1>{ data.place.name }</h1>
              <h2>
                Rating
              </h2>
              {rating}
              <br />
              <h2>
                Description
              </h2>
              <h3>
                {data.place.showEstablished()}
              </h3>
              <h4>
                Serving {data.place.cuisines}
              </h4>
              <br />
              <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                Edit
              </a>{` `}
              <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </div>
          </div>
          <hr />
          <h2>Comments</h2>
          <div className="row">
            {comments}
          </div>
          <hr />
          <h2>Got Your Own Rant or Rave?</h2>
          <form action={`/places/${data.place.id}/comment`} method="POST">
            <div className="row">
              <div className="form-group col-sm-12">
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" className="form-control"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-4">
                <label htmlFor="author">Author</label>
                <input id="author" name="author" className="form-control" />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="stars">Star Rating</label>
                <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
              </div>
              <div className="form-group col-sm-2">
                <label htmlFor="rant">Rant?</label>
                <input type="checkbox" id="rant" name="rant" className="form-control" />
              </div>
            </div>
            <input type="submit" className="btn btn-primary" value="Add Comment" />
          </form>
        </main>
      </Def>
  )
}

module.exports = show



