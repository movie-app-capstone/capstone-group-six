//  setup
const express = require('express');
const mongoose = require('mongoose');
const MONGODB_URL = '';
const app = express();
const bodyParser =  require('body-parser');
const HttpError = require('./models/http.error');
const moviesRouter = require('./routes/movies.router');
const usersRouter = require('./routes/users.router');

//  middleware
app.use(bodyParser.json());
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);

app.use((req, res, next) => {
    const error = new HttpError('..route not found..', 404);
    throw error;
})
app.use((error, req, res, next) => {
    //  check if a header is already sent
    if(res.headerSent) {
        return next(error);
    }
    //  respond with the error code or 500 by default
    res.status(error.code || 500);
    res.json({message: error.message || '..unknown error..'})
});

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        app.listen(8000);
    })
    .catch(error => {
        console.log(error);
    });