const express = require('express');
const tourcontroller = require('./../controllers/tourcontroller')
const router = express.Router()

router.param('id',tourcontroller.checkId)

router
.route('/')
.get(tourcontroller.getAllTours)
.post(tourcontroller.checkbody,tourcontroller.createTour)

router
.route('/:id')
.get(tourcontroller.getTour)
.patch(tourcontroller.updateTour)
.delete(tourcontroller.deleteTour)

module.exports = router;