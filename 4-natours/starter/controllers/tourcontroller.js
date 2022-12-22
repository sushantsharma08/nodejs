const { query } = require('express');
const { findByIdAndDelete } = require('./../models/tourModel')
const Tour = require('./../models/tourModel')

exports.getAllTours = async (req, res) => {
    try {
        //BIULD QUERY 
        const queryObj= {...req.query};
        const excludeFields = ['page','sort','limit','feilds'];
        excludeFields.forEach(el=>delete queryObj[el]);

        const query = Tour.find(queryObj);

        // const query =  Tour.find()
        // .where().equals()
        // .where().equals()

        // EXECUTE THE QUERY

        const tours = await query;
        res
            .status(200)
            .json({
                status: 'success',
                length: tours.length,
                data: {
                    tours
                }
            })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            msg: err
        })
    }
}

exports.getTour = async (req, res) => {
    console.log(req.params.id);
    try {
        const id = req.params.id
        const tour = await Tour.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "error",
            data: error
        })
    }


}

exports.createTour = async (req, res) => {
    // const newTour = Tour({})
    // newTour.save().then

    try {
        const newTour = await Tour.create(req.body);

        res
            .status(201)
            .json({
                "status": "success",
                "data": {
                    tour: newTour
                }
            })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }


}

exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        console.log(req.body);
        // tour.duration = req.body.duration
        res.status(200).json({
            status: "success in update",
            data: {
                tour
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'invalid data sent'
        })
    }

}

exports.deleteTour = async (req, res) => {

    try {
        await Tour.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success'
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'there was some error deleting',
            err: error
        })
    }


}
