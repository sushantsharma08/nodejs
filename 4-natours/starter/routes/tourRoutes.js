const express = require('express');
const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))


const getAllTours = (req, res) => {
    res
        .status(200)
        .json({
            length: tours.length,
            requestedAt: req.requestTime,
            status: 'success',
            data: {
                tours: tours
            }
        })
}

const getTour = (req, res) => {
    console.log(req.params.id);

    const id = Number(req.params.id)
    const tour = tours.find(el => el.id === id)

    res.json({
        status: 'success',
        data: {
            tour
        }
    })
}

const createTour = (req, res) => {
    // console.log(req.body);
    const newid = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newid }, req.body);

    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res
            .status(201)
            .json({
                "status": "success",
                "data": {
                    tour: newTour

                }
            })
    })
}

const updateTour = (req, res) => {

    const tour = tours.find(el => el.id === req.params.id * 1);
    tour.duration = req.body.duration
    res.status(200).json({
        status: "success",
        data: {
            tour
        }
    })

    console.log(req.body.duration * 1);
}

const deleteTour = (req, res) => {
    res.status(204).json({
        status: "success",
        data: null
    })

    console.log(req.body.duration * 1);
}




const router = express.Router()

router
.route('/')
.get(getAllTours)
.post(createTour)

router
.route('/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour)

module.exports = router;