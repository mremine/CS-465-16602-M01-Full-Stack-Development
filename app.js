const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// View engine setup
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views/layout'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        layout: 'layout/layout',
        title: 'Travlr Getaways'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layout/layout',
        title: 'About'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layout/layout',
        title: 'Contact'
    });
});

app.get('/travel', (req, res) => {
    res.render('travel', {
        layout: 'layout/layout',
        title: 'Travel'
    });
});

app.get('/rooms', (req, res) => {
    res.render('rooms', {
        layout: 'layout/layout',
        title: 'Rooms'
    });
});

app.get('/meals', (req, res) => {
    res.render('meals', {
        layout: 'layout/layout',
        title: 'Meals'
    });
});

app.get('/news', (req, res) => {
    res.render('news', {
        layout: 'layout/layout',
        title: 'News'
    });
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});