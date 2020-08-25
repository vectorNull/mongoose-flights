const Flight = require('../models/flight');
const Ticket = require('../models/tickets');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    addTicket
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'New Flight'});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights')
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function (err, tickets) {
            console.log(tickets);
            res.render('flights/show', { title: 'Flight Details', flight, tickets});
        })
    });
};

function addTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        let ticket = new Ticket();
        ticket.seat = req.body.seat;
        ticket.price = req.body.price;
        ticket.flight = req.params.id;
        ticket.save(function(err) {
            res.redirect(`/flights/${req.params.id}`)
        })
    })
}
