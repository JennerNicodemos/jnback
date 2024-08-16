const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Atlas
const uri = "mongodb+srv://jn:123@cluster0.ieyrhht.mongodb.net/book";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const bookRouter = require('./routes/books');

app.use('/book', bookRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});