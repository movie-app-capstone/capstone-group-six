//  setup
const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config({ path: '../.env' });
const fs = require('fs');
const path = require('path');
const bodyParser =  require('body-parser');
const HttpError = require('./models/http-error');

const moviesRouter = require('./routes/movies-router');
const usersRouter = require('./routes/users-router');
//const triviaRouter = require('./routes/trivia-router');

//  middleware
app.use(bodyParser.json());
app.use('uploads/images', express.static(path.join('uploads/images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
})

app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);
//app.use('/api/trivia', triviaRouter);

//  error handling
app.use((req, res, next) => {
    const error = new HttpError('..route not found..', 404);
    throw error;
})

app.use((error, req, res, next) => {
    //  delete image upload if an error occurs
    if(req.file) {
        fs.unlink(req.file.path, (error) => {
            console.log(error);
        })
    }
    //  check if a header is already sent
    if(res.headerSent) {
        return next(error);
    }
    //  respond with the error code or 500 by default
    res.status(error.code || 500);
    res.json({message: error.message || '..unknown error..'})
});

//  cloud server
/*
mongoose
    .connect(MONGODB_URL)
    .then(() => {
        app.listen(3000);
    })
    .catch(error => {
        console.log(error);
    });
*/

//  local testing server
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('..mongo connection open..')
    })
    .catch(error => {
        console.error('..mongo connection error..', error)
    })

app.listen(3000, () => {
    console.log('..listening on 3000..')
})