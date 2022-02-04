const { Book } = require("../models");

const booksController = {
  async index(request, response) {
    const books = await Book.findAll({
      attributes: ["id", "title"],
    });

    response.json({ books: books });
  },

  async show(request, response) {
    const book = await Book.findByPk(request.params.id);
    response.json({ book: book });
  },
};

module.exports = booksController;
