const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Book schema
const bookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	subtitle: {
    type: String,
    default: ""
	},
	authors: {
		type: [String],
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	googleId: {
		type: String,
		required: true,
		unique: true,
	},
});

// Apply book schema to 'Book' model
const Book = mongoose.model('Book', bookSchema);

// Export Book model
module.exports = Book;
