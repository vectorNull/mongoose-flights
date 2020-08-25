const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//Tickets Schema
const ticketsSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: Number,
    flight: {type: Schema.Types.ObjectId, ref: 'Flight'}
})

module.exports = mongoose.model('Ticket', ticketsSchema);
