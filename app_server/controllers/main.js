const homelist = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways',
        layout: 'layouts/layout'
    });
};

const about = (req, res) => {
    res.render('about', {
        title: 'About',
        layout: 'layouts/layout'
    });
};

const contact = (req, res) => {
    res.render('contact', {
        title: 'Contact',
        layout: 'layouts/layout'
    });
};

const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel',
        layout: 'layouts/layout'
    });
};

const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Rooms',
        layout: 'layouts/layout'
    });
};

const meals = (req, res) => {
    res.render('meals', {
        title: 'Meals',
        layout: 'layouts/layout'
    });
};

const news = (req, res) => {
    res.render('news', {
        title: 'News',
        layout: 'layouts/layout'
    });
};

const addTrip = (req, res) => {
    res.render('add-trip', {
        title: 'Add Trip',
        layout: 'layouts/layout'
    });
};

const editTrip = (req, res) => {
    res.render('edit-trip', {
        title: 'Edit Trip',
        layout: 'layouts/layout'
    });
};

const updateTrip = (req, res) => {
    res.render('update-trip', {
        title: 'Update Trip',
        layout: 'layouts/layout'
    });
};

module.exports = {
    homelist,
    about,
    contact,
    travel,
    rooms,
    meals,
    news,
    addTrip,
    editTrip,
    updateTrip
};