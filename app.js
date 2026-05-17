const express = require('express');
const path = require('path');
const hbs = require('hbs');

const routes = require('./app_server/routes/index');

const app = express();

// Views
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Layouts
hbs.registerPartials(path.join(__dirname, 'app_server/views/layouts'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', routes);

// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});