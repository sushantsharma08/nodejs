const express = require('express');
const tourcontroller = require('./../controllers/tourcontroller')
const router = express.Router()

router
.route('/')
.get(tourcontroller.getAllTours)
.post(tourcontroller.createTour)

router
.route('/:id')
.get(tourcontroller.getTour)
.patch(tourcontroller.updateTour)
.delete(tourcontroller.deleteTour)

module.exports = router;