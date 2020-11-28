const axios = require('axios');
const db = require('../models');

// Defining methods for the googleController
module.exports = {
  
  // Searches the Google Books API and returns only unsaved books
	findAll: async (req, res) => {
		try {

			// Fetch query parameters
			const { query: params } = req;

			// Axios GET request to fetch books for given search query
			const results = await axios.get(
				'https://www.googleapis.com/books/v1/volumes',
				{ params }
			);

			// Fetch required details from obtained results
			const apiBooks = await results.data.items.filter(
				(result) =>
					result.volumeInfo.title &&
					result.volumeInfo.infoLink &&
					result.volumeInfo.authors &&
					result.volumeInfo.description &&
					result.volumeInfo.imageLinks &&
					result.volumeInfo.imageLinks.thumbnail
			);

			// Get all book from database
			const dbBooks = await db.Book.find();

			// Filter saved books from axios get request 
			const books = await apiBooks.filter((apiBook) =>
				dbBooks.every(
					(dbBook) => dbBook.googleId.toString() !== apiBook.id
				)
			);

			// Send books which are not saved in database
      return res.json(books);
      
		} catch (error) {
			return res.status(422).json(error);
		}
	},
};
