const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'))

app.use(express.json());
app.use((req, res, next) => {
    console.log(`hello from middleware😁`);
    next();
})
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next();
})

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

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

// app.get('/api/v1/tours', getAllTours)
// app.get('/api/v1/tours/:id', getTour)
// app.post('/api/v1/tours', createTour)
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)

app
    .route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour)

app
    .route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)


const port = 3000
app.listen(port, () => {
    console.log(`running on port ${port}...`);
});
