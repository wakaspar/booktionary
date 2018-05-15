/* Book Model Definitons */
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// Defines object schema
var BookSchema = new Schema({
  title: String,
  author: String,
  haveRead: Boolean
});

// Builds a Mongoose model, named 'Book,' out of our BookSchema
var Book = mongoose.model('Book', BookSchema);
// Export our new model as a Node module
module.exports = Book;
