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

// ROUTES

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


// ==========================================
// ADMIN SPA MOCK PAGES FOR SCREENSHOTS
// ==========================================

app.get('/admin/add-trip', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Add Trip</title>

        <style>
            body {
                font-family: Arial;
                padding: 40px;
                background: #f4f4f4;
            }

            .container {
                background: white;
                padding: 30px;
                width: 500px;
                border-radius: 10px;
            }

            input {
                width: 100%;
                padding: 10px;
                margin-top: 5px;
                margin-bottom: 20px;
            }

            button {
                padding: 12px 20px;
                background: teal;
                color: white;
                border: none;
                border-radius: 5px;
            }
        </style>
    </head>

    <body>

        <div class="container">

            <h1>Add New Trip</h1>

            <form>

                <label>Trip Name</label><br>
                <input value="Puerto Rico Escape">

                <label>Duration</label><br>
                <input value="7 Days">

                <label>Price</label><br>
                <input value="$1,899">

                <button>Add Trip</button>

            </form>

        </div>

    </body>
    </html>
    `);
});



app.get('/admin/edit-trip', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Edit Trip</title>

        <style>
            body {
                font-family: Arial;
                padding: 40px;
                background: #f4f4f4;
            }

            .container {
                background: white;
                padding: 30px;
                width: 500px;
                border-radius: 10px;
            }

            input {
                width: 100%;
                padding: 10px;
                margin-top: 5px;
                margin-bottom: 20px;
            }

            button {
                padding: 12px 20px;
                background: darkorange;
                color: white;
                border: none;
                border-radius: 5px;
            }
        </style>
    </head>

    <body>

        <div class="container">

            <h1>Edit Trip</h1>

            <form>

                <label>Trip Name</label><br>
                <input value="Puerto Rico Escape">

                <label>Duration</label><br>
                <input value="10 Days">

                <label>Price</label><br>
                <input value="$2,199">

                <button>Update Trip</button>

            </form>

        </div>

    </body>
    </html>
    `);
});



app.get('/admin/update-trip', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Trip Updated</title>

        <style>
            body {
                font-family: Arial;
                padding: 40px;
                background: #f4f4f4;
            }

            .box {
                background: white;
                padding: 30px;
                border-radius: 10px;
                width: 500px;
            }

            h1 {
                color: green;
            }
        </style>
    </head>

    <body>

        <div class="box">

            <h1>Trip Successfully Updated</h1>

            <p><strong>Trip:</strong> Puerto Rico Escape</p>

            <p><strong>Duration:</strong> 10 Days</p>

            <p><strong>Price:</strong> $2,199</p>

        </div>

    </body>
    </html>
    `);
});


// SERVER

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});