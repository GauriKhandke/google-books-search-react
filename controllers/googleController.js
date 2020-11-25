const axios = require("axios");
const db = require("../models");

// findAll searches the Google Books API and returns only the entries that are not saved
module.exports = {

  findAll: function(req, res) {

    // Fetch query parameter
    const { query: params } = req;

    // Axios GET request to Google Books API
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results =>
        // Fetch required info from response
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // Books returned from api call after filtering required info
      .then(apiBooks =>

        // Find all books saved in database and send as dbBooks
        db.Book.find().then(dbBooks =>

          apiBooks.filter(apiBook =>
            
            // Filter and send books that are not saved in database
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      // Send response back to client
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
