const express = require('express');
const cookiParser = require('cookie-parser');
const logger = require('morgan');
const userRouter = require('./routes/user')
const port = 3000;
const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/petshop";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("app is connected to db");
});

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookiParser());
app.use('/users',userRouter)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
module.exports = app;