const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/travlr');

const Trip = mongoose.model(
    'Trip',
    new mongoose.Schema({
        code: String,
        name: String,
        length: String,
        start: String,
        resort: String,
        perPerson: String,
        image: String,
        description: String
    })
);

Trip.insertMany([
{
    code: "PR001",
    name: "Puerto Rico Escape",
    length: "10 Days",
    start: "2026-07-15",
    resort: "San Juan Resort",
    perPerson: "$2,199",
    image: "puertorico.jpg",
    description: "Experience the beaches and culture of Puerto Rico."
},
{
    code: "HI001",
    name: "Hawaii Adventure",
    length: "7 Days",
    start: "2026-08-01",
    resort: "Maui Beach Resort",
    perPerson: "$2,899",
    image: "hawaii.jpg",
    description: "Explore volcanoes, beaches, and island life."
},
{
    code: "BA001",
    name: "Bahamas Cruise",
    length: "5 Days",
    start: "2026-09-10",
    resort: "Nassau Harbor Resort",
    perPerson: "$1,799",
    image: "bahamas.jpg",
    description: "Relax on crystal-clear beaches in the Bahamas."
}
])
.then(() => {
    console.log("Trip data loaded successfully");
    mongoose.connection.close();
})
.catch(err => {
    console.log(err);
});