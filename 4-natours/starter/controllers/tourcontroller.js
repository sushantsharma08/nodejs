const Tour = require('./../models/tourModel')

exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find()
        res
            .status(200)
            .json({
                status: 'success',
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
            message: 'invalid data sent'
        })
    }


}

exports.updateTour = async (req, res) => {

    try {
        
    const tour = Tour.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    // tour.duration = req.body.duration
    res.status(200).json({
        status: "success",
        data: {
            // tour
        }
    })

    console.log(req.body.duration * 1);

    } catch (error) {

    }

}

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: "success",
        data: null
    })

    console.log(req.body.duration * 1);
}
