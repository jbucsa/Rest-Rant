const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true},
  pic: { type: String, default: './public/images/BeachLife.jpg'},
  cuisines: { type: String, required: true},
  city: { type: String, default: 'Anytown'},
  state: { type: String, default: 'USA'},
  founded: {
    type: Number,
    min: 800,
    max: [new Date().getFullYear()]},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

placeSchema.methods.showEstablished = function (){
  return`${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
};

module.exports = mongoose.model('Place', placeSchema);
