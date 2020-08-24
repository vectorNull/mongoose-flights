var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

// GET request to /flights
router.get('/', flightsCtrl.index);
// GET request to /flights/new
router.get('/new', flightsCtrl.new);
// GET request to /flights/:id
router.get('/:id', flightsCtrl.show);
// POST request to /flights
router.post('/', flightsCtrl.create);

module.exports = router;
