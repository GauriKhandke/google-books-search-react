const db = require('../models');

module.exports = {
	// Find all saved books
	findAll: async (req, res) => {
		try {
			const books = await db.Book.find(req.query);
			return res.json(books);
		} catch (error) {
			return res.status(422).json(error);
		}
	},

	// Find book by ID
	findById: async (req, res) => {
		try {
			const books = await db.Book.findById(req.params.id);
			return res.json(books);
		} catch (error) {
			return res.status(422).json(error);
		}
	},

	// Create/save book in database
	create: async (req, res) => {
		try {
			const book = await db.Book.create(req.body);
			return res.json(book);
		} catch (error) {
			return res.status(422).json(error);
		}
	},

	// Update one book by ID
	update: async (req, res) => {
		try {
			const book = await db.Book.findOneAndUpdate(
				{ id: req.params.id },
				req.body
			);
			return res.json(book);
		} catch (error) {
			return res.status(422).json(error);
		}
	},

	// Delete book from database
	remove: async (req, res) => {
		try {
			const book = await db.Book.findById(req.params.id);
			const deletedBook = await book.remove();
			return res.json(deletedBook);
		} catch (error) {
			return res.status(422).json(error);
		}
	},
};
