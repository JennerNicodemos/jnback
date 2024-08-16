const mongoose = require('mongoose');
const BookRecord = require('./models/booklist.model');
// const booksData = require('./data/books.json');
mongoose.connect("mongodb+srv://jn:123@cluster0.ieyrhht.mongodb.net/book");

const connection = mongoose.connection;

connection.once('open', async () => {
    try {
      for (const bookData of booksData.books) {
        const { bookTitle, bookAuthor, description } = bookData;
        const newBook = new BookRecord({ bookTitle, bookAuthor, description });
        await newBook.save();
        console.log(`Inserted book: ${bookTitle}`);
      }
  
      console.log('All books inserted successfully.');
      connection.close();
    } catch (error) {
      console.error('Error inserting books:', error);
      connection.close();
    }
  });