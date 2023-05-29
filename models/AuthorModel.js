const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name: String,
    age: Number,
    dob: Date,
    email: String,
    book_published: Number
});

const AuthorModel = mongoose.model('author', AuthorSchema, 'author');
module.exports = AuthorModel;