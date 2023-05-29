var express = require('express');
const BookModel = require('../models/BookModel');
var router = express.Router();

router.get('/', async (req, res) => {
  // select * from book
  var books = await BookModel.find({});
  // res.send(books);
  res.render('book_list', { books: books });
});

router.get('/delete/:id', async (req, res) => {
  // Lấy id từ request url
  var id = req.params.id;
  // Tìm book trên DB có id tương ứng
  var book = BookModel.findById(id);
  // Xóa book tìm thấy
  // SQL: delete * from book where id = 'id'
  await BookModel.deleteOne(book)
    .then(() => { console.log("Delete book succeed!") })
    .catch((err) => console.error("Delete book failed!"));
  res.redirect('/');

  //
  // await BookModel.findByIdAndDelete(id);
});

router.get('/drop', async (req, res) => {
  await BookModel.deleteMany({});
  console.log("Delete all books succeed !");
  // redirect theo url
  res.redirect('/');
});

router.get('/detail/:id', async (req, res) => {
  var id = req.params.id;
  var book = await BookModel.findById(id);
  // Check xem sách có tồn tại k

  res.render('book_detail', { book: book });
});

router.get('/add', async (req, res) => {

});

router.get('/edit/:id', async (req, res) => {

});

module.exports = router;
