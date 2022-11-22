const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.checkId=('id',(req,res,next,val)=>{

    if(req.params.id*1>tours.length){
        return res.status(404).json({
            status:'fail',
            message:'invalid id'
        })
    }
    next();
 })

exports.checkbody = (req,res,next)=>{
    if(!req.body.name|| !req.body.price){
       return res.status(400).json({
        status:'fail',
        message:'needs name and price'
       })
    }
    next()
}

exports.getAllTours = (req, res) => {
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

exports.getTour = (req, res) => {
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

exports.createTour = (req, res) => {
    // console.log(req.body);
    const newid = tours[tours.length - 1].id*1 + 1;
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

exports.updateTour = (req, res) => {

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

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: "success",
        data: null
    })

    console.log(req.body.duration * 1);
}