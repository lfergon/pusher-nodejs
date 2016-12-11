const mongoose = require('mongoose');  
const Schema   = mongoose.Schema;

var measureSchema = new Schema({  
  measure:     { type: Number },
  insertedAt:  { type: Date },
  updatedAt:   { type: Date },
  unit:        { type: String },
});

module.exports = mongoose.model('Measure', measureSchema); 