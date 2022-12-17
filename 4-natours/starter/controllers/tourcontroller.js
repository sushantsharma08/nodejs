const Tour = require('./../models/tourModel')

exports.getAllTours = async(req, res) => {
    try{
        const tours =await Tour.find()
        res
            .status(200)
            .json({
                status: 'success',
                data: {
                    tours
                }
            })
    }catch(err){
        res.status(404).json({
            status:'fail',
            msg:err
        })
    }
}

exports.getTour = (req, res) => {
    console.log(req.params.id);

    const id = Number(req.params.id)
    // const tour = tours.find(el => el.id === id)

    // res.json({
    //     status: 'success',
    //     data: {
    //         tour
    //     }
    // })
}

exports.createTour = async (req, res) => {
    // const newTour = Tour({})
    // newTour.save().then

    try{
        const newTour= await Tour.create(req.body);

    res
    .status(201)
    .json({
        "status": "success",
        "data": {
            tour: newTour
        }
    })
    } catch(err){
        res.status(400).json({
            status:'fail',
            message:'invalid data sent'
        })
    }

  
}

exports.updateTour = (req, res) => {

    // const tour = tours.find(el => el.id === req.params.id * 1);
    // tour.duration = req.body.duration
    res.status(200).json({
        status: "success",
        data: {
            // tour
        }
    })

    console.log(req.body.duration * 1);
}

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: "success",
        data: null
    })

    console.log(req.body.duration * 1);
}
