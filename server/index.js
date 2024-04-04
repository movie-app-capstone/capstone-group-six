//  setup
const express = require('express');
const app = express();
const User = require('./models/user');
const PORT = 3000;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

//  mongoose mongo movieApp db connection
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('...mongo connection open...')
    })
    .catch(error => {
        console.error('...mongo connection error...', error)
    })

//  middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'tempSecret' }));

const checkLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return //res.redirect('/login')
    }
    next();
}

//  routes
app.get('/', (req, res) => {
    res.send('Landing Page')
})

app.get('/register', (req, res) => {
    //res.render('register')
} )

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    //  create a new user and hash their password
    const hash = await bcrypt.hash(password, 13);
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/temp');
})

app.get('/login', (req, res) => {
    //res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    //  find the user and authenticate their password
    const user = await User.findOne({ username });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
        req.session.user_id = user._id;
        //res.redirect('/temp')
    } else {
        res.send('Invalid credentials.')
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    req.session.destroy();
    //res.redirect('/login')
})

app.get('/temp', checkLogin, (req, res) => {
    //  logged in user route
    //res.render('temp')
})

app.listen(PORT, () => {
    console.log('Listening on 3000')
})

/*
    to-do:
    - try & catch for error handling
    - JWS or other token
    - refactor register to hash password in user model
    - refactor login route to find user by method in user model
*/