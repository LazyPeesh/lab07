var express = require('express');
const AuthorModel = require('../models/AuthorModel');
var router = express.Router();

/* GET users listing. */
router.get('/author', async (req, res) => {
  const authors = await AuthorModel.find({});

  res.render('author_list', { authors: authors });
});

router.get('/author/detail/:id', async (req, res) => {
  var id = req.params.id;
  var author = await AuthorModel.findById(id);
  // Check xem sách có tồn tại k

  res.render('author_detail', { author: author });
});

module.exports = router;
