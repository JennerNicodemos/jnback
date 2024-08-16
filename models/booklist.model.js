const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookTitle: { type: String, required: true },
  bookAuthor: { type: String, required: true },
  description: { type: String },
});

const BookRecord = mongoose.model("bookRecord", bookSchema);
module.exports = BookRecord;