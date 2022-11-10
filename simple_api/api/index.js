const router = require("express").Router();
const { genre, book } = require("./mock");
const { reply, getById } = require("./utils");

router.get("/genre", (req, res, next) => {
  reply(res, genre);
});

router.get("/book", (req, res, next) => {
  const { genreId: genreId, bookId } = req.query;
  let result = book;

  if (genreId) {
    const genre = getById(result)(genreId);
    if (genre) {
      result = genre.book.map(getById(result));
    }
  }

  if (!genreId && bookId) {
    result = getById(result)(bookId);
  }
  reply(res, result);
});

module.exports = router;
