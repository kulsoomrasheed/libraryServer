const {  mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  username: String,
  createdAt: { type: Date, default: Date.now },
});
  
  const Book = mongoose.model('book', bookSchema);
  

  module.exports = {Book}

  /*  end_year: String,
  intensity: Number,
  sector:String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number*/