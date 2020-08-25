const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Destination Schema
const destinationSchema = new Schema({
    airport: String,
    arrival: Date
})

//flight schema
const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema]
}, {
    timestamps: true
});

//compile schema into model and export 
module.exports = mongoose.model('Flight', flightSchema);
